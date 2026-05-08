package com.voucher_management.vouchermanagement.infrastructure.persistence.adapter;

import com.voucher_management.vouchermanagement.domain.entity.VoucherUsage;
import com.voucher_management.vouchermanagement.domain.repository.VoucherUsageRepository;
import com.voucher_management.vouchermanagement.infrastructure.persistence.entity.VoucherUsageJpaEntity;
import com.voucher_management.vouchermanagement.infrastructure.persistence.repository.VoucherUsageJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class VoucherUsagePersistenceAdapter implements VoucherUsageRepository {

    private final VoucherUsageJpaRepository jpaRepository;

    @Override
    public VoucherUsage save(VoucherUsage usage) {
        VoucherUsageJpaEntity entity = VoucherUsageJpaEntity.builder()
                .id(usage.getId())
                .userId(usage.getUserId())
                .voucherId(usage.getVoucherId())
                .usedAt(usage.getUsedAt())
                .build();
        VoucherUsageJpaEntity saved = jpaRepository.save(entity);
        return mapToDomain(saved);
    }

    @Override
    public List<VoucherUsage> findAll() {
        return jpaRepository.findAll().stream()
                .map(this::mapToDomain)
                .collect(Collectors.toList());
    }

    private VoucherUsage mapToDomain(VoucherUsageJpaEntity entity) {
        return VoucherUsage.builder()
                .id(entity.getId())
                .userId(entity.getUserId())
                .voucherId(entity.getVoucherId())
                .usedAt(entity.getUsedAt())
                .build();
    }
}