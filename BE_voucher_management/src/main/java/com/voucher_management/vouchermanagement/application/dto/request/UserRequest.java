package com.voucher_management.vouchermanagement.application.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRequest {
    @NotBlank(message = "Tên người dùng không được để trống")
    @Size(max = 100, message = "Tên không được quá 100 ký tự")
    private String fullName;

    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng") // Validate format email
    private String email;

    @Size(max = 20, message = "Số điện thoại không quá 20 ký tự")
    private String phone;
}