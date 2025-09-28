package nl.pixel.printlib.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@SuppressWarnings("unused")
@Configuration
public class DynamicDataSourceConfig {

    @Autowired
    DataSourceProperties properties;

    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource() {
        try (
                Connection conn = DriverManager.getConnection(properties.getUrl()
                        + "?user=" + properties.getUsername()
                        + "&password=" + properties.getPassword());
                Statement stmt = conn.createStatement()){
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS `" + properties.getDbName() + "`");
        } catch (Exception e) {
            throw new RuntimeException("Failed to create database: " + properties.getDbName(), e);
        }
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl(properties.getUrl() + properties.getDbName());
        ds.setUsername(properties.getUsername());
        ds.setPassword(properties.getPassword());
        return ds;
    }
}
