package nl.pixel.printlib.util;

import lombok.extern.slf4j.Slf4j;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
public class DatabaseUtil {
    private static final Pattern DB_NAME_PATTERN = Pattern.compile("jdbc:mysql://[^/]+/([^?]+)");

    public static String getDatabaseName(DataSource dataSource) {
        try (Connection conn = dataSource.getConnection()) {
            String url = conn.getMetaData().getURL();
            Matcher matcher = DB_NAME_PATTERN.matcher(url);
            return matcher.find() ? matcher.group(1) : "default_db";
        } catch (Exception e) {
            log.error("Failed to extract database name", e);
            return "unknown";
        }
    }

}
