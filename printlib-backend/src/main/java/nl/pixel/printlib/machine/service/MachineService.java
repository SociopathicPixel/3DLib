package nl.pixel.printlib.machine.service;

import nl.pixel.printlib.machine.entity.MachineEntity;

import java.util.List;

public interface MachineService {
    List<MachineEntity> getAllMachines();
    MachineEntity saveMachine(MachineEntity entity);
}
