package com.voucher_management.vouchermanagement.infrastructure.web.controller;

import com.voucher_management.vouchermanagement.application.dto.request.UserRequest;
import com.voucher_management.vouchermanagement.application.dto.response.ApiResponse;
import com.voucher_management.vouchermanagement.application.service.UserService;
import com.voucher_management.vouchermanagement.domain.entity.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<ApiResponse<User>> createUser(@Valid @RequestBody UserRequest request) {
        User user = userService.createUser(request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Create user successfully", user));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<User>>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(new ApiResponse<>(true, "Get list users successfully", users));
    }
}