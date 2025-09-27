package nl.pixel.printlib.machine.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nl.pixel.printlib.machine.entity.MachineEntity;
import nl.pixel.printlib.machine.service.MachineService;
import nl.pixel.printlib.util.DatabaseUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.sql.DataSource;
import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
public class MachineController {
    private final MachineService service;
    private final DataSource dataSource;


    @GetMapping
    public List<MachineEntity> getAllMachines(){
        String dbName = DatabaseUtil.getDatabaseName(dataSource);
        log.info("Fetching all {} from {}", MachineEntity.class.getSimpleName(), dbName);
        return service.getAllMachines();
    }

    @PostMapping
    public void saveMachine(MachineEntity entity) {
        String dbName = DatabaseUtil.getDatabaseName(dataSource);
        log.info("Save {} entity to {}", entity.getClass().getSimpleName(), dbName);
        service.saveMachine(entity);
    }
}
