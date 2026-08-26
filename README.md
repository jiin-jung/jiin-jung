# 정지인 | Backend Developer

**인천대학교 멋쟁이사자처럼 14기 부회장 & 백엔드 파트장**

Java와 Spring Boot를 기반으로, 기능 구현에서 끝나지 않고 실제 환경에서 측정하고 개선하는 백엔드 개발자를 지향합니다.

AI API와 외부 API 연동, 모니터링·부하 테스트 프로젝트를 경험하며 서비스가 실제 환경에서도 안정적으로 동작하기 위한 방법을 고민해왔습니다. 새로운 사람들의 좋은 점을 배우고 제 것으로 만들며, 함께 성장하는 개발자가 되겠습니다.

---

## Experience

| 기간 | 소속 | 활동 |
|---|---|---|
| 2026.02 ~ 현재 | 멋쟁이사자처럼 인천대학교 14기 | 부회장 & 백엔드 파트장 |
| 2026.02 ~ 현재 | 창업 동아리 횃불이유괴단 | 아이디어 검증 단계의 MVP 백엔드 개발 참여 |
| 2025.03 ~ 2026.02 | 멋쟁이사자처럼 인천대학교 13기 | Backend Developer |
| 2021.03 ~ 현재 | 인천대학교 | 정보통신공학과 전공 · 컴퓨터공학과 부전공 |

## Tech Stack

| 분류 | 기술 |
|---|---|
| **Language** | ![Java](https://img.shields.io/badge/Java-FB7200?style=flat-square&logo=openjdk&logoColor=white) |
| **Backend** | ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white) ![JPA](https://img.shields.io/badge/JPA-59666C?style=flat-square&logo=hibernate&logoColor=white) |
| **Database** | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white) |
| **Observability & Test** | ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white) ![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white) |
| **Environment** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=flat-square&logo=docker&logoColor=white) |

## Featured Projects

### 🧺 [뽀송이 (AI Laundry)](https://www.bbosongi.com/)

의류 이미지를 분석해 세탁 방법을 안내하는 AI 기반 세탁 관리 서비스

- 카카오맵·날씨 API 연동 기능 및 Prometheus·Grafana 모니터링 환경 구축
- k6 기반 baseline/load/stress/verify/accuracy 테스트를 구성해 동시 요청 병목 분석
- 사람이 판독한 정답 JSON과 구조화된 `washRules`를 비교하는 정확도·안전성 테스트 구현
- **로컬 검증:** 77개 중 76개 통과, API 오류 및 critical error 0건
- **팀 성과:** 실제 서비스 의류 1,000개 평가에서 평균 정확도 93.0% → 98.5%
- **Tech:** Java 21, Spring Boot 3.5.6, MySQL, Prometheus, Grafana, k6, Docker
- [Backend Repository](https://github.com/kpd4444/bbosong-backend) · [Performance & Accuracy Test Notes](https://app.notion.com/p/3c6482bdb23e80baa521f6dc501fa635)

### ⚾ [YaGooMap](https://xn--2e0bt1v52i.kr/)

야구 중계 매장 정보를 검색하고 필터링하는 서비스

- 크롤링 데이터를 백엔드에서 전달받아 검증하고 DB에 저장하는 파이프라인 구현
- 저장된 매장 데이터 검색 및 조건별 필터링 구현
- 다중 이미지 정렬과 태그 기반 검색 확장을 고려한 ERD 및 데이터 구조 설계
- **Tech:** Java, Spring Boot, MySQL

## Links

- **Email:** [cki08543@gmail.com](mailto:cki08543@gmail.com)
- **Portfolio:** [Notion Portfolio](https://app.notion.com/p/29d482bdb23e8032bc54f3ee15c17241)
- **Blog:** [Velog](https://velog.io/@jung_ji_in02/posts) · [Tistory](https://cki08543.tistory.com/)
