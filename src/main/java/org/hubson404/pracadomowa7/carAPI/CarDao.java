package org.hubson404.pracadomowa7.carAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class CarDao implements BasicDao<CarDto> {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CarDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<CarDto> findAll() {
        List<CarDto> cars = new ArrayList<>();
        String sql = "SELECT * FROM CARS";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql);
        query.forEach(entry -> cars.add(new CarDto(
                        Long.parseLong(String.valueOf(entry.get("car_id"))),
                        String.valueOf(entry.get("brand")),
                        String.valueOf(entry.get("model")),
                        CarColor.valueOf(String.valueOf(entry.get("color"))),
                        Integer.parseInt(String.valueOf(entry.get("production_year")))
                )
        ));
        return cars;
    }

    @Override
    public void save(CarDto carDto) {
        String sql = "INSERT INTO CARS (BRAND, MODEL, COLOR, PRODUCTION_YEAR) VALUES (?,?,?,?)";
        jdbcTemplate.update(sql, carDto.getBrand(), carDto.getModel(), carDto.getColor().toString(), carDto.getProductionYear());
    }

    @Override
    public void update(CarDto carDto) {
        String sql = "UPDATE CARS SET CARS.BRAND=?, CARS.MODEL=?, CARS.COLOR=?, CARS.PRODUCTION_YEAR=?, WHERE CAR_ID=?";
        jdbcTemplate.update(sql, carDto.getBrand(), carDto.getModel(), carDto.getColor().toString(),
                carDto.getProductionYear(), carDto.getCarId());
    }

    @Override
    public void delete(int id) {
        String sql = "DELETE FROM CARS WHERE CAR_ID=?";
        jdbcTemplate.update(sql, id);
    }

    public List<CarDto> findCarsProducedBetweenYears(Integer from, Integer to) {
        List<CarDto> cars = new ArrayList<>();

        int fromE = from == null ? Integer.MIN_VALUE : from;
        int toE = to == null ? Integer.MAX_VALUE : to;

        String sql = "SELECT * FROM CARS WHERE PRODUCTION_YEAR>=? AND PRODUCTION_YEAR<=?";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql, fromE, toE);
        query.forEach(entry -> cars.add(new CarDto(
                        Long.parseLong(String.valueOf(entry.get("car_id"))),
                        String.valueOf(entry.get("brand")),
                        String.valueOf(entry.get("model")),
                        CarColor.valueOf(String.valueOf(entry.get("color"))),
                        Integer.parseInt(String.valueOf(entry.get("production_year")))
                )
        ));
        return cars;
    }
}
