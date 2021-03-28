package org.hubson404.pracadomowa7.cars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class CarDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CarDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<CarDto> findAll() {
        String sql = "SELECT * FROM CARS";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql);
        return toCarDtos(query);
    }

    public void save(CarDto carDto) {
        String sql = "INSERT INTO CARS (BRAND, MODEL, COLOR, PRODUCTION_YEAR) VALUES (?,?,?,?)";
        jdbcTemplate.update(
                sql,
                carDto.getBrand(),
                carDto.getModel(),
                carDto.getColor().toString(),
                carDto.getProductionYear()
        );
    }

    public void update(CarDto carDto) {
        String sql = "UPDATE CARS SET CARS.BRAND=?, CARS.MODEL=?, CARS.COLOR=?, CARS.PRODUCTION_YEAR=?, WHERE CAR_ID=?";
        jdbcTemplate.update(
                sql,
                carDto.getBrand(),
                carDto.getModel(),
                carDto.getColor().toString(),
                carDto.getProductionYear(),
                carDto.getCarId()
        );
    }

    public void delete(int id) {
        String sql = "DELETE FROM CARS WHERE CAR_ID=?";
        jdbcTemplate.update(sql, id);
    }

    public List<CarDto> findCarsProducedBetweenYears(Integer from, Integer to) {

        int fromYear = from == null ? Integer.MIN_VALUE : from;
        int toYear = to == null ? Integer.MAX_VALUE : to;

        String sql = "SELECT * FROM CARS WHERE PRODUCTION_YEAR>=? AND PRODUCTION_YEAR<=?";
        List<Map<String, Object>> query = jdbcTemplate.queryForList(sql, fromYear, toYear);

        return toCarDtos(query);
    }

    private List<CarDto> toCarDtos(List<Map<String, Object>> query) {
        List<CarDto> cars = new ArrayList<>();

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
