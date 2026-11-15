<div align="center">

# 정지인 | Backend Developer

### **인천대학교 멋쟁이사자처럼 14기 부회장 & 백엔드 파트장**

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=6C63FF&center=true&vCenter=true&width=650&lines=Backend+Developer;Java+%26+Spring+Boot;Performance+%26+Monitoring;Build+%E2%86%92+Measure+%E2%86%92+Improve)](https://git.io/typing-svg)

<br/>

</div>

저는 Java와 Spring Boot를 중심으로 백엔드 개발을 공부하고 있습니다.

처음에는 **원하는 기능을 구현하는 것 자체**가 재미있었습니다. 하지만 여러 프로젝트를 경험하면서 생각이 조금씩 바뀌었습니다.

> 기능이 잘 동작하는 것만큼  
> **많은 요청이 들어와도 잘 버틸 수 있는지,  
> 문제가 생겼을 때 빠르게 발견할 수 있는지**도 중요하다고 생각합니다.

그래서 최근에는 직접 부하 테스트를 해보고, 서버의 상태를 모니터링하면서 제가 만든 서비스를 
조금 더 안정적으로 운영하는 방법을 공부하고 있습니다.

아직 배우고 싶은 것도, 부족한 것도 많습니다.  
AI의 도움도 적극적으로 받고 있습니다. 다만 AI가 만들어준 답을 그대로 사용하는 것보다, **왜 그렇게 동작하는지 스스로 이해하고 설명할 수 있는 개발자**가 되고 싶습니다.

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
![PostGIS](https://img.shields.io/badge/PostGIS-336791?style=flat-square\&logo=postgresql\&logoColor=white)

### Observability & Test

![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square\&logo=prometheus\&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square\&logo=grafana\&logoColor=white)
![k6](https://img.shields.io/badge/k6-7D64FF?style=flat-square\&logo=k6\&logoColor=white)
![JUnit5](https://img.shields.io/badge/JUnit5-25A162?style=flat-square\&logo=junit5\&logoColor=white)

### Environment

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square\&logo=docker\&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=flat-square\&logo=docker\&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square\&logo=amazonwebservices\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square\&logo=githubactions\&logoColor=white)

---

## Featured Projects

### [뽀송이 | AI Laundry](https://www.bbosongi.com/)

> 의류 이미지를 분석해 세탁 방법을 안내하는 AI 기반 세탁 관리 서비스

* 카카오맵·날씨 API 연동 및 Prometheus·Grafana 기반 모니터링 환경 구축
* k6 기반 `baseline`, `load`, `stress`, `verify`, `accuracy` 테스트 구성
* 동시 요청 환경에서 발생하는 병목 구간을 분석하고 서버 처리 안정성 검증
* 분석 작업 중복 실행 방지·장기 미완료 작업 복구, 업로드 이미지 EXIF 제거·리사이즈 적용
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
* 사전 등록 유입 경로(`utm_source`) 저장 및 관리자 대시보드 집계 구현
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

### [PickEat](https://www.pickeat.kr/)

> 고민 없는 맛집 선택 서비스 · 미디어디자인 졸업전시 협업

* **1인 백엔드 개발**로 설계부터 운영 배포까지 전 과정 담당 (2026.10~ `api.pickeat.kr` 운영)
* PostGIS `geography` + GiST 인덱스 기반 반경 후보 조회, DB 우선·부족 시 Google Places 보충하는 하이브리드 추천 구현
* 동행 유형·가격대·주차·영업시간을 반영한 추천 점수 계산과 세션 기반 재추천(대체 후보) 구조 설계
* 이메일 인증 회원가입, Refresh Token rotation(해시 저장) 기반 JWT 인증 구현
* 후기·공개 피드·좋아요·알림, S3 presigned URL 기반 이미지 업로드 구현
* GitHub Actions CI/CD로 EC2 배포, **헬스체크 실패 시 직전 릴리스 자동 롤백** 구성
* 결정 소요 시간·Pick 전환율·후기 작성률을 집계하는 사용자 테스트용 관리자 대시보드 구현

**Tech**

![Java](https://img.shields.io/badge/Java%2021-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot%204.1.1-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square\&logo=springsecurity\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)
![PostGIS](https://img.shields.io/badge/PostGIS-336791?style=flat-square\&logo=postgresql\&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square\&logo=flyway\&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square\&logo=amazonwebservices\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square\&logo=githubactions\&logoColor=white)

[Backend Repository](https://github.com/INU-pickeat/pickeat-backend)

---

## Currently Building

### [Toggle, Me! (토글미)](https://github.com/ITTA-10th-Team1/toggle-me-backend)

> 좋아하는 것들을 나만의 3D 방에 모으는 취향 아카이브 서비스 · 잇타 10기

![Status](https://img.shields.io/badge/Status-In%20Progress-555555?style=flat-square)

* **백엔드 개발 (2인)**: 방·가구·아이템 기록·팔로우 도메인 설계 및 API 구현
* 카카오 로그인 기반 JWT 인증(OAuth2 Resource Server) 구성
* 프론트 3D 좌표(위치·쿼터니언·크기) 기반 가구 배치·방 커스터마이징 저장 API 구현
* Spring AI + Gemini를 활용한 사진 기반 AI 추천 태그 분석, S3 이미지 업로드 구현
* 온보딩 동시 호출 시 회원 행 잠금으로 중복 방 생성 방지
* Docker Compose 운영 배포와 GitHub Actions CD 구성

**Tech**

![Java](https://img.shields.io/badge/Java%2021-FB7200?style=flat-square\&logo=openjdk\&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot%204.1.2-6DB33F?style=flat-square\&logo=springboot\&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square\&logo=springsecurity\&logoColor=white)
![Spring AI](https://img.shields.io/badge/Spring%20AI-6DB33F?style=flat-square\&logo=spring\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square\&logo=mysql\&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square\&logo=flyway\&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=flat-square\&logo=amazons3\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square\&logo=docker\&logoColor=white)

[Backend Repository](https://github.com/ITTA-10th-Team1/toggle-me-backend)

---

## Links

[![Email](https://img.shields.io/badge/Email-cki08543%40gmail.com-EA4335?style=flat-square\&logo=gmail\&logoColor=white)](mailto:cki08543@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Notion-000000?style=flat-square\&logo=notion\&logoColor=white)](https://app.notion.com/p/29d482bdb23e8032bc54f3ee15c17241)
[![Velog](https://img.shields.io/badge/Velog-jung__ji__in02-20C997?style=flat-square\&logo=velog\&logoColor=white)](https://velog.io/@jung_ji_in02/posts)

---

<div align="center">
  <a href="https://github.com/devxb/gitanimals">
    <img src="https://render.gitanimals.org/farms/jiin-jung" />
  </a>
</div>
