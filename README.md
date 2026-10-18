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
| Game 챔피언 이름·초상화·표시 순서 | `content.js` | `champions` |
| 수상 내역, Certificate 주소 | `index.html` | `ag-award-text` |
| 색상·폰트·너비·간격·썸네일 크기 | `styles.css` | 맨 위 변수와 주석으로 나뉜 각 구역 |
| 메뉴 전환과 목록 출력 동작 | `site.js` | 보통 수정하지 않아도 됩니다 |

`content.js`는 따옴표와 쉼표를 유지해 주세요. 항목을 추가할 때 기존 객체 하나를 복사하면 편합니다. 새 연도 논문을 추가하면 Publication 페이지에서 해당 연도가 자동으로 표시됩니다.

논문의 `note`에는 `Acceptance Ratio=24.1%`, `SCIE · Q1`처럼 괄호 없이 문구를 적습니다. 학회/저널명과 연도 뒤에 괄호가 자동으로 붙고, 전체가 같은 이탤릭체로 표시됩니다. 괄호 속 Acceptance Ratio 문구는 파랑, SCIE 문구는 초록으로 표시됩니다. `links`의 `Paper` 주소는 논문 제목에 연결됩니다. Paper 주소가 없는 논문은 일반 제목으로 표시됩니다. `key`가 `LOHA`인 논문만 `links`의 `Slides`(또는 `Slide`)와 `Poster` 주소를 학회 정보 오른쪽 끝에 Slide → Poster 순서로 표시합니다. 작은 화면에서는 버튼들이 함께 다음 줄로 넘어가 오른쪽에 정렬됩니다. Poster는 같은 폴더의 `DAC26_Poster.pdf`에 연결되므로 공개 사이트에 반영할 때 이 PDF도 함께 업로드하세요. 다른 논문의 자료 주소는 데이터에 보관되지만 현재 화면에는 표시하지 않습니다. Slide, Poster, Certificate 버튼은 모두 높이 22px, 글자 12px, 아이콘 14px이며 너비는 글자 길이에 맞춰집니다.

### 스킬 항목에 링크 넣기

`content.js`의 `skills`에서 **Vector Search Libraries**와 **Memory Simulation** 안의 각 항목을 다음처럼 편집합니다. 9개 항목의 저장소 주소는 기본값으로 입력해 두었습니다.

```js
{ "name": "hnswlib", "url": "https://github.com/nmslib/hnswlib" }
```

`name`은 화면에 보이는 이름, `url`은 클릭했을 때 열릴 주소입니다. 본인이 사용하는 포크나 특정 버전의 주소가 있다면 `url`만 바꾸세요. 주소는 `https://`까지 포함해서 입력합니다. 링크가 있는 항목은 작은 ↗ 표시가 붙고 새 탭으로 열립니다. `"url": ""`처럼 비워두면 링크와 화살표 없이 일반 항목으로 표시됩니다. 다른 분류의 기존 문자열 항목(`"Python"` 등)도 그대로 사용할 수 있습니다. 저장 후 `http://127.0.0.1:8775/#technical-skills`에서 확인하세요.

### 논문 그림 넣기

대표 그림은 **PNG, JPG, WebP 또는 SVG 이미지 파일**로 넣습니다. PDF는 대표 그림 칸에 직접 표시되지 않습니다. PDF로 만든 그림이 있다면 해당 그림을 PNG로 내보내세요. 확장자만 `.pdf`에서 `.png`로 바꾸면 안 됩니다. 논문 전체 PDF는 별도로 Paper 링크에 연결할 수 있습니다.

1. 편집 중인 이 폴더(`index.html`이 있는 폴더)에 이미지 파일을 넣습니다. 간단하게 `falcon.png`, `meltkv.png`, `loha.png`, `bags.png`, `q-vesa.png`처럼 영문 소문자 이름을 쓰면 됩니다. 이미지 내용은 해당 논문에 맞게 준비하세요.
2. `content.js`에서 해당 논문의 `key`를 찾습니다. 예를 들어 `"key": "LOHA"` 아래의 `"image": ""`를 `"image": "loha.png"`로 수정합니다.
3. `"imageAlt": ""`에는 `"imageAlt": "LOHA architecture overview"`처럼 그림 설명을 입력합니다.
4. 저장하면 로컬 미리보기에 그림이 나타납니다. 공개 사이트에 반영할 때는 이미지 파일과 수정한 `content.js`를 함께 업로드합니다.

그림을 클릭하면 흰 배경 위에 원본이 크게 표시됩니다. About과 Publications 양쪽에서 사용할 수 있으며, 새로 추가한 이미지에도 자동으로 적용됩니다. 그림 재클릭, 바깥 영역 클릭, 오른쪽 위 ×, Esc 또는 마우스 휠로 닫으면 기존 스크롤 위치로 돌아옵니다. 키보드로 그림 버튼에 이동한 뒤 Enter/Space로 열 수도 있습니다. 확대할 때는 같은 이미지 원본을 사용하므로 파일을 썸네일 크기(230×106px)로 줄여 저장하지 말고 충분히 큰 해상도를 유지하세요.

파일 이름은 자유롭게 정할 수 있지만 실제 파일 이름과 `image` 값의 대소문자·확장자가 정확히 같아야 합니다. `images` 폴더를 쓰려면 실제 파일을 그 폴더에 넣고 `"image": "images/loha.png"`로 입력하세요. 웹 경로에는 역슬래시(`\`) 대신 슬래시(`/`)를 씁니다.

그림 영역의 가로는 모두 **230px**입니다. 데스크톱 본문 4줄에 맞춰 FALCON, MeltKV, BAGS는 **230×80px**(배지 18px + 간격 6px 포함 총 104px), 5줄인 LOHA, Q-VESA는 **230×106px**(총 130px)로 표시합니다. 이 구분은 `styles.css`의 `data-paper` 선택자에서 바꿀 수 있습니다. 글이 짧은 논문의 빈 공간도 함께 줄여 논문 사이 간격은 28px로 유지합니다. 선명하게 보이도록 원본은 920px 이상의 가로 해상도로 내보내고, 글자가 많은 그림은 더 큰 원본을 사용하세요. 그림을 자르거나 늘리지 않고 전체 비율을 유지하며 표시합니다. PDF 페이지 전체보다 그림 주변의 불필요한 여백을 줄여 내보내는 것이 좋습니다. 본문은 26px 행간이며 긴 제목·저자명은 잘리지 않고 줄바꿈됩니다.

논문 전체 PDF를 직접 연결하려면 예를 들어 `loha-paper.pdf`를 같은 폴더에 넣고, 해당 논문의 `links` 안에 있는 Paper URL을 `"loha-paper.pdf"`로 바꾸세요. 대표 그림(`image`)과 논문 원문 링크(`links`)는 별개입니다.

### 앨범 커버 넣기

Playground의 Music 아래에 작은 `Favorite Albums` 부제가 표시됩니다. 앨범은 데스크톱에서 한 줄에 7개씩 표시되고, 작은 화면에서는 4개, 모바일에서는 3개로 줄어듭니다. 열 수는 `styles.css` 맨 위의 `--ag-album-cols`에서 바꿀 수 있습니다. 커버 아래에는 제목이나 아티스트를 표시하지 않고, 커버를 클릭하면 그리드 아래에 `아티스트 - 앨범 제목`이 한 줄로 나타납니다. 선택한 앨범 정보에는 영문 Lora·한글 Noto Serif KR 글꼴과 18px 크기를 사용합니다.

커버를 찾을 때는 [Apple Music Artwork Finder](https://bendodson.com/projects/apple-music-artwork-finder/)에서 앨범명/가수명으로 검색하거나 Apple Music 앨범 URL을 넣어 고해상도 이미지를 찾을 수 있습니다. 다른 경로로는 [MusicBrainz / Cover Art Archive](https://musicbrainz.org/doc/Cover_Art_Archive)가 있습니다.

1. 커버 이미지 파일을 이 폴더 안의 `albums` 폴더에 저장합니다. 예: `albums/album-01.jpg`. 영문 소문자와 숫자, 하이픈을 쓰면 경로 관리가 편합니다. JPG, PNG, WebP를 사용할 수 있고, 정사각형 600×600~1000×1000px 정도면 현재 화면에 충분합니다. 확장자는 실제 파일 형식과 맞춰주세요.
2. `content.js`의 `albums`에서 기존 항목을 다음처럼 바꿉니다.

```js
{
  "title": "앨범 제목",
  "artist": "가수 이름",
  "year": "",
  "cover": "albums/album-01.jpg",
  "url": "",
  "description": ""
}
```

3. `cover`는 이미지 파일 경로이고 `url`은 Apple Music, Spotify 등 음원 서비스의 앨범 주소입니다. `year`, `url`, `description`은 빈 문자열로 두어도 됩니다. 커버를 클릭하면 제목과 아티스트만 표시하고, `url`이 있으면 옆에 Listen 링크를 표시합니다. 번호·연도·설명은 표시하지 않습니다. 작은 화면에서 한 줄을 넘는 제목은 말줄임하고, 마우스를 올리면 전체 제목과 아티스트를 확인할 수 있습니다.
4. 저장 후 `http://127.0.0.1:8775/#playground`에서 확인합니다. 표시 순서는 `albums`에 적은 순서이며, 항목을 복사해 추가하거나 필요 없는 예시 객체를 삭제할 수 있습니다.
5. 공개 사이트에 반영할 때는 수정한 `content.js`와 `albums` 폴더의 이미지 파일도 같은 경로로 함께 업로드합니다. 이번 7열 변경을 배포하려면 `styles.css`도 올려야 합니다.

파일 이름의 대소문자와 확장자는 `cover`에 적은 값과 정확히 일치해야 합니다. 웹 경로에는 역슬래시(`\`) 대신 슬래시(`/`)를 씁니다. `cover`가 빈 문자열이면 예시 커버가 계속 표시됩니다.

### Game 챔피언 그림 넣기

Music 아래의 Game은 같은 그림자와 간격을 사용하며, 챔피언 카드는 데스크톱에서 한 줄에 10개가 들어가는 크기입니다. 모든 카드는 동일한 정사각형이고, 마지막 줄에 10개 미만이 남아도 카드 크기가 커지지 않습니다. 작은 화면은 4열, 모바일은 3열을 유지합니다. Music은 기존 데스크톱 7열입니다. 챔피언은 클릭할 수 없는 정적인 이미지로 표시하며, 이름 팝업·상세 영역·마우스 오버 움직임이 없습니다. 키보드 Tab으로 이동하는 버튼도 아닙니다. Music의 앨범 선택 동작은 그대로 사용합니다.

리신 → 케인 → 녹턴 → 자르반 IV → 벨베스 → 신짜오 → 세주아니 → 마스터 이 → 엘리스 → 그레이브즈 → 다이애나 → 릴리아 → 마오카이 → 카직스 → 킨드레드 → 뽀삐 → 문도 박사 → 쉬바나 → 이블린 → 판테온 순서로 총 20명의 선택창 초상화를 넣었습니다. 데스크톱에서 10개씩 두 줄로 표시됩니다. 그림은 Riot Games의 공식 Data Dragon 16.20.1에서 받은 128×128px 원본 PNG이고, `champions` 폴더에 보관합니다. 페이지에서 게임 데이터를 따로 요청하지 않으며 API 키도 필요하지 않습니다. 각 파일의 출처는 `champions/SOURCES.md`에 기록했습니다.

1. 새 이미지를 `champions` 폴더에 넣습니다. 예: `champions/lee-sin.png`.
2. `content.js`의 맨 아래 `champions` 항목을 수정하거나 복사해서 추가합니다.

```js
{
  "name": "Lee Sin",
  "skin": "",
  "image": "champions/lee-sin.png",
  "position": "50% 50%",
  "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/LeeSin.png"
}
```

`name`은 이미지의 대체 텍스트에 쓰이는 이름, `image`는 파일 경로입니다. 순서는 이 배열에 적힌 순서를 따릅니다. `skin`은 비워두어도 되고, 입력하면 대체 텍스트에 `챔피언 - 스킨` 형태로 포함됩니다. 이름과 스킨은 화면의 캡션이나 툴팁으로 표시하지 않습니다. `position`은 직사각형 그림을 넣었을 때 카드 안에서 보일 중심 위치이고, 정사각형 초상화는 기본값 그대로 두면 됩니다. `source`는 원본 출처 기록이며 화면에는 표시하지 않습니다. 파일 이름과 경로는 대소문자까지 정확히 맞춰주세요.

이미지 받는 곳:

- [Riot Games 공식 Data Dragon 문서](https://developer.riotgames.com/docs/lol#data-dragon): Champion Square Assets는 정사각형 초상화, Champion Splash Assets는 큰 일러스트, Champion Loading Screen Assets는 세로 로딩 화면 그림입니다.
- [리신 선택창 초상화 원본](https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/LeeSin.png): 열어서 우클릭 → 이미지 저장으로 받을 수 있습니다. `LeeSin`처럼 데이터에 쓰이는 영문 ID는 표시 이름의 띄어쓰기와 다를 수 있습니다.
- [리신 기본 일러스트 원본](https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg): 나중에 큰 일러스트가 필요할 때 사용합니다. 끝의 숫자는 스킨 번호이며 기본 스킨은 `0`입니다.

공개 사이트에 적용할 때는 `index.html`, `styles.css`, `site.js`, `content.js`와 `champions` 폴더를 함께 업로드합니다. 수정 전 전체 사이트는 `../backups/site-20261018-162225-474565.zip`에 보관했습니다.

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

연락처 아이콘은 SVG 파일입니다. `email.svg`는 컬러 Gmail 로고, `linkedin.svg`는 파란 LinkedIn 로고, `google-scholar.svg`는 백업에서 복원한 기존 흑백 원형 로고입니다. 출처 정보는 `LICENSE-icons.txt`에 기록했습니다. 파일을 로컬에 보관하므로 방문 시 아이콘 제공 사이트에 접속하지 않습니다. Gmail 아이콘을 누르면 메일 앱을 열지 않고 `csj0725@khu.ac.kr` 주소를 작은 팝업으로 표시합니다. 주소는 선택해서 복사할 수 있고, 아이콘을 다시 누르거나 바깥을 클릭하거나 Esc를 누르면 닫힙니다. 주소를 변경하려면 `index.html`의 `ag-email-address` 내용을 수정하세요.

세 로고의 실제 그림 높이는 30px 기준으로 맞춥니다. Gmail은 원래의 4:3 비율을 유지하고, Google Scholar는 SVG 내부 여백을 보정하여 크기가 균형 있게 보이도록 했습니다. `styles.css`의 `--ag-social-icon-height`에서 공통 크기를 바꿀 수 있습니다. 각 클릭 영역은 44×44px이고 아이콘은 가로·세로 중앙에 정렬됩니다. 보이는 그림 사이의 간격을 맞추기 위해 LinkedIn 클릭 영역을 오른쪽으로 2.5px 보정했습니다.

교체 전 흑백 아이콘은 `../backups/contact-icons-original-20261018-151224/`에 보관했습니다. 되돌리려면 이 폴더의 `email.svg`, `linkedin.svg`, `google-scholar.svg` 세 파일을 현재 `website` 폴더에 같은 이름으로 덮어쓰면 됩니다. 아이콘 교체와 주소 표시 기능을 공개 사이트에 반영할 때는 세 SVG 파일, `index.html`, `styles.css`, `site.js`, `LICENSE-icons.txt`를 함께 업로드합니다.

문서·슬라이드·상장 버튼의 아이콘은 Lucide이며 `LICENSE-icons.txt`에 해당 라이선스를 포함합니다.
