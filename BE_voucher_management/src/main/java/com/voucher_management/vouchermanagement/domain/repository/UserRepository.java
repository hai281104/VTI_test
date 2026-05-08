package com.voucher_management.vouchermanagement.domain.repository;

import com.voucher_management.vouchermanagement.domain.entity.User;
import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User user);
    List<User> findAll();
    boolean existsByEmail(String email);
    Optional<User> findById(Long id);
}