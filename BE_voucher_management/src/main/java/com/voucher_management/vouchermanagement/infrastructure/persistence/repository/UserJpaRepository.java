package com.voucher_management.vouchermanagement.infrastructure.persistence.repository;

import com.voucher_management.vouchermanagement.infrastructure.persistence.entity.UserJpaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepository extends JpaRepository<UserJpaEntity, Long> {
    boolean existsByEmail(String email);
}