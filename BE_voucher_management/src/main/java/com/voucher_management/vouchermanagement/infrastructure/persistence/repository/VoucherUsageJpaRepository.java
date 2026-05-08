package com.voucher_management.vouchermanagement.infrastructure.persistence.repository;

import com.voucher_management.vouchermanagement.infrastructure.persistence.entity.VoucherUsageJpaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoucherUsageJpaRepository extends JpaRepository<VoucherUsageJpaEntity, Long> {
}