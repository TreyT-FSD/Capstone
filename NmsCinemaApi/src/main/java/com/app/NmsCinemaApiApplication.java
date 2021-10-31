package com.app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.SQLTimeoutException;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NmsCinemaApiApplication {

	public static void main(String[] args) {
		// workaround for docker not being able
		// to handle dependency spinup when using docker compose
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			boolean connected = false;
			String connectionStr = "jdbc:mysql://localhost:3306/nmscinema";

			if (args.length == 1) {
				// assume we have passed in a new conn string via docker
				connectionStr = "jdbc:mysql://host.docker.internal:3306/nmscinema";
			}
			System.out.println("Connection String: " + connectionStr);
			System.out.println("Checking for DB connection...");
			Connection con = null;

			while (!connected) {
				try {
					con = DriverManager.getConnection(connectionStr, "root", "avocado");
					Statement st = con.createStatement();
					con.close();
					connected = true;
				} catch (SQLTimeoutException e) {
					System.out.println("Timeout Occured - Waiting for DB connection...");
					Thread.sleep(2000);
				} catch (SQLException e) {
					System.out.println("Waiting for DB connection...");
					Thread.sleep(2000);
				} finally {
					if (con != null) {
						try {
							con.close();
						} catch (SQLException e) {
							System.out.println("Error while trying to close the connection.");
							e.printStackTrace();
						}
					}
				}
			}

			// start the spring boot app
			System.out.println("DB Found - Starting SpringBoot Application");
			Thread.sleep(1000);
			SpringApplication.run(NmsCinemaApiApplication.class, args);

		} catch (ClassNotFoundException | InterruptedException e) {
			System.err.println("Some error during DB connection check.");
			e.printStackTrace();
		}
	}
}
