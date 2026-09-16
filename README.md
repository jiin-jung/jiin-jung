# 정지인 | Backend Developer

**인천대학교 멋쟁이사자처럼 14기 부회장 & 백엔드 파트장**

Java와 Spring Boot를 기반으로 백엔드 서비스를 개발하고 있습니다.

단순히 기능을 구현하는 데서 끝나지 않고, **모니터링과 부하 테스트를 통해 실제 환경에서 서비스의 성능과 안정성을 측정하고 개선하는 과정**에 관심이 있습니다.

AI API 및 외부 API 연동, 인증·인가, 데이터 무결성, 모니터링, 부하 테스트 등을 경험하며 안정적인 백엔드 서비스를 만들기 위해 필요한 요소들을 직접 설계하고 검증해왔습니다.

새로운 사람들의 좋은 점을 배우고 제 것으로 만들며, 함께 성장하는 개발자가 되고자 합니다.

---

## Experience

| 기간                | 소속                | 활동                      |
| ----------------- | ----------------- | ----------------------- |
| 2026.02 ~ 현재      | 멋쟁이사자처럼 인천대학교 14기 | 부회장 & 백엔드 파트장           |
| 2026.02 ~ 현재      | 창업 동아리 횃불이유괴단     | 아이디어 검증 단계의 MVP 백엔드 개발  |
| 2025.03 ~ 2026.02 | 멋쟁이사자처럼 인천대학교 13기 | Backend Developer       |
| 2021.03 ~ 현재      | 인천대학교             | 정보통신공학과 전공 · 컴퓨터공학과 부전공 |

---

## Tech Stack

### Language

![Java](https://img.shields.io/badge/Java-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)

### Backend

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square\&logo=springsecurity\&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-59666C?style=flat-square\&logo=hibernate\&logoColor=white)

### Database

![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square\&logo=mysql\&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square\&logo=mariadb\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square\&logo=flyway\&logoColor=white)

### Observability & Test

![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square\&logo=prometheus\&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square\&logo=grafana\&logoColor=white)
![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square\&logo=k6\&logoColor=white)
![JUnit5](https://img.shields.io/badge/JUnit5-25A162?style=flat-square\&logo=junit5\&logoColor=white)

### Environment

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square\&logo=docker\&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=flat-square\&logo=docker\&logoColor=white)

---

## Featured Projects

### [뽀송이 | AI Laundry](https://www.bbosongi.com/)

> 의류 이미지를 분석해 세탁 방법을 안내하는 AI 기반 세탁 관리 서비스

* 카카오맵·날씨 API 연동 및 Prometheus·Grafana 기반 모니터링 환경 구축
* k6 기반 `baseline`, `load`, `stress`, `verify`, `accuracy` 테스트 구성
* 동시 요청 환경에서 발생하는 병목 구간을 분석하고 서버 처리 안정성 검증
* 사람이 판독한 정답 JSON과 구조화된 `washRules`를 비교하는 정확도·안전성 테스트 구현
* **로컬 검증:** 테스트 데이터 77건 중 76건 통과, API 오류 및 Critical Error 0건
* **서비스 개선:** 실제 의류 1,000건 평가 기준 평균 정확도 **93.0% → 98.5%**

**Tech**

![Java](https://img.shields.io/badge/Java%2021-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot%203.5.6-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square\&logo=mysql\&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square\&logo=prometheus\&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square\&logo=grafana\&logoColor=white)
![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square\&logo=k6\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square\&logo=docker\&logoColor=white)

[Backend Repository](https://github.com/kpd4444/bbosong-backend)

---

### [DeSyP](https://github.com/DesyProject/desyp-backend)

> 사전 등록과 추천 시스템, 이벤트 당일 응모를 제공하는 이벤트 참여 서비스

![Status](https://img.shields.io/badge/Status-In%20Progress-555555?style=flat-square)

* **1인 백엔드 개발**로 서비스 구조, 데이터 모델, 인증·인가, API 및 테스트 설계·구현
* Google OIDC 기반 소셜 로그인과 Spring Security·CSRF를 적용한 사전 등록 기능 구현
* 동일 계정·정규화 이메일 중복 등록, 자기추천, 추천 관계 변경을 제한하는 검증 로직 구현
* 추천 인원과 최초 코드 사용 보너스를 기반으로 한 점수 및 공동 순위 로직 구현
* `common`, `notification-service`, `event-entry-service` 기반 멀티모듈 구조 설계
* Flyway 기반 DB 마이그레이션 및 H2 PostgreSQL 모드를 활용한 통합 테스트 구성
* 정상 등록, 중복 등록, 자기추천, 동시 추천, 관리자 권한, CSRF 등 주요 시나리오 검증
* AWS SES·EventBridge Scheduler 기반 알림 및 이벤트 응모 기능 확장 예정

**Tech**

![Java](https://img.shields.io/badge/Java%2021-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square\&logo=springsecurity\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square\&logo=flyway\&logoColor=white)
![JUnit5](https://img.shields.io/badge/JUnit5-25A162?style=flat-square\&logo=junit5\&logoColor=white)

[Backend Repository](https://github.com/DesyProject/desyp-backend)

---

### [YaGooMap](https://xn--2e0bt1v52i.kr/)

> 야구 중계 매장 정보를 검색하고 필터링하는 서비스

* 크롤링 데이터를 백엔드에서 전달받아 검증하고 DB에 저장하는 데이터 파이프라인 구현
* 저장된 매장 데이터를 기반으로 검색 및 조건별 필터링 기능 구현
* 다중 이미지 순서 관리와 태그 기반 검색 확장을 고려한 ERD 및 데이터 구조 설계
* 서비스 확장을 고려해 매장, 이미지, 태그 간 관계를 분리하여 데이터 모델링

**Tech**

![Java](https://img.shields.io/badge/Java-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square\&logo=mysql\&logoColor=white)

[Backend Repository](https://github.com/jiin-jung/yagoomap-backend)

---

## Currently Building

### [PickEat](https://github.com/INU-pickeat/pickeat-backend)

> 음식점 탐색 경험을 개선하기 위해 개발 중인 서비스

![Status](https://img.shields.io/badge/Status-Early%20Development-555555?style=flat-square)

* **1인 백엔드 개발**로 Spring Boot 기반 서버 아키텍처 설계 및 개발 진행
* PostgreSQL·JPA·Flyway 기반 데이터 계층 구성
* Spring Security 기반 인증 구조 설계
* Actuator·Prometheus를 활용한 모니터링 환경을 고려한 초기 프로젝트 구성

**Tech**

![Java](https://img.shields.io/badge/Java%2021-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot%204.1.1-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square\&logo=springsecurity\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square\&logo=flyway\&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square\&logo=prometheus\&logoColor=white)

[Backend Repository](https://github.com/INU-pickeat/pickeat-backend)

---

## Links

[![Email](https://img.shields.io/badge/Email-cki08543%40gmail.com-EA4335?style=flat-square\&logo=gmail\&logoColor=white)](mailto:cki08543@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Notion-000000?style=flat-square\&logo=notion\&logoColor=white)](https://app.notion.com/p/29d482bdb23e8032bc54f3ee15c17241)
[![Velog](https://img.shields.io/badge/Velog-jung__ji__in02-20C997?style=flat-square\&logo=velog\&logoColor=white)](https://velog.io/@jung_ji_in02/posts)
[![Tistory](https://img.shields.io/badge/Tistory-Blog-000000?style=flat-square\&logo=tistory\&logoColor=white)](https://cki08543.tistory.com/)

---

<div align="center">
  <a href="https://github.com/devxb/gitanimals">
    <img src="https://render.gitanimals.org/farms/jiin-jung" />
  </a>
</div>
