package com.voucher_management.vouchermanagement.infrastructure.persistence.repository;

import com.voucher_management.vouchermanagement.infrastructure.persistence.entity.VoucherJpaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VoucherJpaRepository extends JpaRepository<VoucherJpaEntity, Long> {
    boolean existsByCode(String code);
    List<VoucherJpaEntity> findByCodeContainingIgnoreCase(String code);
}