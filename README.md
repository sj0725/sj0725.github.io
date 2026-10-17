# Seongjoon Cho 홈페이지 작업 안내

실제 사이트: https://sj0725.github.io/

이 폴더가 편집용 원본입니다. HTML/CSS/JavaScript 정적 사이트여서 별도 빌드나 npm 설치가 필요하지 않습니다.

## 수정하면서 화면 확인하기

1. 이 폴더의 `start-preview.cmd`를 더블클릭합니다.
2. 브라우저에서 `http://127.0.0.1:8775/`가 열립니다.
3. 원하는 파일을 텍스트 편집기에서 수정하고 저장합니다. 로컬 미리보기는 약 1초 안에 자동 새로고침됩니다.
4. 실행 창을 닫거나 Ctrl+C를 누르면 미리보기가 종료됩니다.

로컬에서 수정하거나 저장하는 것만으로 공개 사이트가 변경되지는 않습니다. GitHub의 main에 업로드하고 커밋해야 공개 사이트가 변경됩니다.

Windows 실행 파일은 이 PC의 Codex Python을 먼저 사용하고, 없으면 설치된 `python`을 사용합니다. 다른 PC에서는 Python 3을 설치한 뒤 `python preview.py --open`으로 실행할 수도 있습니다. 8775 포트가 이미 사용 중이면 기존 미리보기 창을 사용하거나 `python preview.py --port 8776 --open`으로 실행하세요.

## 어디를 수정하나요?

| 수정할 내용 | 파일 | 찾을 곳 |
| --- | --- | --- |
| 소개 문단, 이메일·LinkedIn·Scholar 주소, 프로필 사진 | `index.html` | `ag-profile`, `ag-social`, `ag-intro` |
| 논문 제목·저자·학회·연도·등급·링크·대표 그림 | `content.js` | `publications` |
| 스킬 분류와 항목 | `content.js` | `skills` |
| 음악 앨범 제목·가수·커버·링크·설명 | `content.js` | `albums` |
| 수상 내역, Certificate 주소 | `index.html` | `ag-award-text` |
| 색상·폰트·너비·간격·썸네일 크기 | `styles.css` | 맨 위 변수와 주석으로 나뉜 각 구역 |
| 메뉴 전환과 목록 출력 동작 | `site.js` | 보통 수정하지 않아도 됩니다 |

`content.js`는 따옴표와 쉼표를 유지해 주세요. 항목을 추가할 때 기존 객체 하나를 복사하면 편합니다. 새 연도 논문을 추가하면 Publication 페이지에서 해당 연도가 자동으로 표시됩니다.

### 논문 그림 넣기

1. 이 폴더에 `loha.png`처럼 파일을 넣습니다. `images` 폴더를 만들어 정리해도 됩니다.
2. 해당 논문의 `"image": ""`를 `"image": "loha.png"` 또는 `"image": "images/loha.png"`로 수정합니다.
3. `imageAlt`에 그림 설명을 입력합니다.

그림 크기는 모든 논문이 동일합니다. 현재는 배지 18px + 간격 6px + 그림 96px = 120px이며 본문 5줄 기준입니다. 좁은 화면이나 더 긴 새 논문은 글을 자르지 않고 줄바꿈합니다. 그림을 아직 지정하지 않은 논문은 자리 표시자를 표시합니다.

### 앨범 커버 넣기

`albums`의 `title`, `artist`, `year`, `cover`, `url`, `description`을 채우세요. `cover`는 이미지 파일 경로이고 `url`은 음원 서비스 주소입니다. 현재 앨범들은 배치 예시이며 실제 선호 앨범으로 교체할 수 있습니다. 필요 없는 앨범 객체는 삭제해도 됩니다.

## 공개 사이트에 반영하기

1. 먼저 `backup-site.cmd`를 더블클릭해 현재 로컬 버전을 보관합니다.
2. 로컬 미리보기에서 변경 내용을 확인합니다.
3. https://github.com/sj0725/sj0725.github.io 에서 **main** 브랜치인지 확인합니다.
4. **Add file → Upload files**로 변경한 파일을 올립니다. 예: 논문/스킬 내용만 바꿨다면 `content.js`만 올리면 됩니다.
5. 이미지 파일을 추가했다면 이미지도 함께 올립니다. 폴더 경로는 `content.js`에 쓴 경로와 같아야 합니다.
6. 변경 설명을 적고 **Commit changes**를 누릅니다. GitHub Actions의 Pages 배포가 완료되면 실제 사이트에서 확인합니다.

여러 파일을 함께 고쳤다면 한 번의 커밋으로 함께 업로드하세요. 사이트에 이전 내용이 보이면 Ctrl+F5로 새로고침해 보세요. `preview.py`, `start-preview.cmd`, `backup.py`, `backup-site.cmd`는 로컬 작업 도구이며 공개 사이트 화면에는 나타나지 않습니다.

## 백업과 복원

첫 디자인 변경 직전 버전은 다음 두 곳에 보관합니다.

- GitHub 브랜치: `backup/pre-redesign-2026-10-17`
- 원본 커밋: `70ca31f219d64234e2a42c19e282e5f901ff1148`
- 이 작업 폴더의 상위 `backups` 폴더: `site-before-redesign-2026-10-17.zip`

`backup-site.cmd`는 현재 사이트 폴더 전체를 상위 `backups` 폴더에 날짜와 시간이 붙은 ZIP으로 저장합니다. 기존 파일은 바꾸지 않습니다. 새로 만든 백업은 PC 안에만 보관되므로 필요하면 다른 저장장치에도 복사하세요.

복원할 때는 ZIP을 새 폴더에 풀어 미리보기로 확인하고, 되돌릴 파일을 GitHub main에 다시 올려 **새 커밋**으로 저장하면 됩니다. 이번 변경 직전 디자인만 되돌리려면 백업 브랜치의 `index.html`을 main의 `index.html`에 복원하면 됩니다. 기존 이미지와 PDF는 그대로 유지되어 있습니다.

백업 브랜치를 main에 단순 병합하는 것은 되돌리기가 아닙니다. 백업 파일로 교체해 새 커밋을 만들거나, Git 사용 시 해당 변경 커밋을 `git revert`로 되돌리세요. GitHub 커밋 기록은 남기고 복원하는 방식입니다.

## 아이콘

기존 연락처 아이콘은 원래 사이트 자산을 사용합니다. 문서·슬라이드·상장 버튼의 아이콘은 Lucide이며 `LICENSE-icons.txt`에 해당 라이선스를 포함합니다.
