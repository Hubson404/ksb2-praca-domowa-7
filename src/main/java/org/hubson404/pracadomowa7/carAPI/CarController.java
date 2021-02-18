package org.hubson404.pracadomowa7.carAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {

    private final CarDao carDao;

    @Autowired
    public CarController(CarDao carDao) {
        this.carDao = carDao;
    }

    @GetMapping("/cars")
    public List<CarDto> getCars() {
        return carDao.findAll();
    }

    @PostMapping("/cars")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveCar(@RequestBody CarDto carDto) {
        carDao.save(carDto);
    }
}
