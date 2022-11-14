import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { modifyUser, User } from '@core/models/user.model';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'ab-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userData!: modifyUser;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public editProfile: any
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.profileForm.controls['first_name'].setValue(this.editProfile.first_name);
    this.profileForm.controls['last_name'].setValue(this.editProfile.last_name);
    this.profileForm.controls['email'].setValue(this.editProfile.email);
  }

  modifyProfile() {
    this.userData = {
      first_name: this.profileForm.controls['first_name'].value,
      last_name: this.profileForm.controls['last_name'].value,
      email: this.profileForm.controls['email'].value,
      password: this.profileForm.controls['password'].value,
      roleId: this.editProfile.roleId,
      points: this.editProfile.points
    }
    this.userService.modifyProfile(this.editProfile.id, this.userData).subscribe((user) => {
      this.dialogRef.close(user);
      setTimeout(() => {
        window.location.reload();
      }, 100)
    })
  }

}
