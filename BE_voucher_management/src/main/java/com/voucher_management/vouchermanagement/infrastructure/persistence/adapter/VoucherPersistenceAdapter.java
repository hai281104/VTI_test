package com.voucher_management.vouchermanagement.infrastructure.persistence.adapter;

import com.voucher_management.vouchermanagement.domain.entity.Voucher;
import com.voucher_management.vouchermanagement.domain.repository.VoucherRepository;
import com.voucher_management.vouchermanagement.infrastructure.persistence.entity.VoucherJpaEntity;
import com.voucher_management.vouchermanagement.infrastructure.persistence.repository.VoucherJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class VoucherPersistenceAdapter implements VoucherRepository {

    private final VoucherJpaRepository jpaRepository;

    @Override
    public Voucher save(Voucher voucher) {
        VoucherJpaEntity entity = mapToJpaEntity(voucher);
        VoucherJpaEntity savedEntity = jpaRepository.save(entity);
        return mapToDomainEntity(savedEntity);
    }

    @Override
    public Optional<Voucher> findById(Long id) {
        return jpaRepository.findById(id).map(this::mapToDomainEntity);
    }

    @Override
    public boolean existsByCode(String code) {
        return jpaRepository.existsByCode(code);
    }

    @Override
    public List<Voucher> findAll() {
        return jpaRepository.findAll().stream()
                .map(this::mapToDomainEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<Voucher> searchByCode(String code) {
        return jpaRepository.findByCodeContainingIgnoreCase(code).stream()
                .map(this::mapToDomainEntity)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        jpaRepository.deleteById(id);
    }

    // Helper functions for mapping
    private VoucherJpaEntity mapToJpaEntity(Voucher domain) {
        return VoucherJpaEntity.builder()
                .id(domain.getId())
                .code(domain.getCode())
                .discountPercent(domain.getDiscountPercent())
                .quantity(domain.getQuantity())
                .expiredDate(domain.getExpiredDate())
                .status(domain.getStatus())
                .createdAt(domain.getCreatedAt())
                .build();
    }

    private Voucher mapToDomainEntity(VoucherJpaEntity entity) {
        return Voucher.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .discountPercent(entity.getDiscountPercent())
                .quantity(entity.getQuantity())
                .expiredDate(entity.getExpiredDate())
                .status(entity.getStatus())
                .createdAt(entity.getCreatedAt())
                .build();
    }
}