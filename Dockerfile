FROM tomcat:9-jdk17-temurin

COPY build/libs/student.management-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war