FROM eclipse-temurin:17-jdk-focal AS builder

WORKDIR /app

COPY gradlew .
COPY gradle/ gradle/
COPY settings.gradle .
COPY build.gradle .

COPY src src

RUN chmod +x gradlew && ./gradlew clean build -x test

FROM tomcat:9-jdk17-temurin

COPY --from=builder /app/build/libs/student.management-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
