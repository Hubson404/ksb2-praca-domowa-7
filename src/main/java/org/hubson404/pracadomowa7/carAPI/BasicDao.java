package org.hubson404.pracadomowa7.carAPI;

import java.util.List;

public interface BasicDao<T> {

    List<T> findAll();

    void save(T t);

    void update(T t);

    void delete(int id);

}
