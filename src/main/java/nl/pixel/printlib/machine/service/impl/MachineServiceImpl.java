package nl.pixel.printlib.machine.service.impl;

import lombok.RequiredArgsConstructor;
import nl.pixel.printlib.machine.entity.MachineEntity;
import nl.pixel.printlib.machine.repository.MachineRepository;
import nl.pixel.printlib.machine.service.MachineService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MachineServiceImpl implements MachineService {
    private final MachineRepository repository;

    @Override
    public List<MachineEntity> getAllMachines() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public MachineEntity saveMachine(MachineEntity entity) {
        return repository.save(entity);
    }
}
