function modalFunc(image) {
  const wrap = document.querySelector("#wrap");
  const newModal = document.createElement("div");
  const modalOverlay = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalTitle = document.createElement("div");
  const modalImage = document.createElement("div");
  const modalPuzzle = document.createElement("div");
  const modalOriginal = document.createElement("div");
  const modalText = document.createElement("div");
  const puzzleStart = document.createElement("button");
  const modalClose = document.createElement("button");
  const originalImg = document.createElement("img");

  newModal.className = "modal";
  modalOverlay.className = "modal_overlay";
  modalContent.className = "modal_content";
  modalTitle.className = "modal_title";
  modalImage.className = "modal_image";
  modalPuzzle.className = "modal_puzzle";
  modalOriginal.className = "modal_original";
  modalText.className = "modal_text";
  modalClose.className = "modal_close";
  puzzleStart.className = "puzzle_start";

  originalImg.className = "modal_puzzle_original";
  originalImg.src = `./images/${image}.jpg`;

  for (let i = 0; i < 9; i++) {
    const littleBox = document.createElement("div");
    littleBox.className = `box_${i} box`;
    if (i == 8) {
    } else {
      littleBox.style.backgroundImage = `url(./images/resize_img/${image}.jpg)`;
    }
    modalPuzzle.appendChild(littleBox);
  }

  modalTitle.innerHTML = "퍼즐을 완성 해보세요!";
  modalText.innerHTML = "작품명 : " + image;
  puzzleStart.innerHTML = "시작";
  modalClose.innerHTML = "닫기";

  modalClose.onclick = function () {
    newModal.remove();
  };

  puzzleStart.onclick = function () {
    const arr = document.querySelectorAll(".box");
    const randArr = [];
    for (let i = 0; i < 9; i++) {
      randArr[i] = Math.round(Math.random() * 8);
      for (let j = 0; j < i; j++) {
        if (randArr[i] == randArr[j]) {
          i--;
        }
      }
      arr[i].remove();
    }
    for (let i = 0; i < 9; i++) {
      const randBox = document.createElement("div");
      randBox.className = `box_${randArr[i]} box`;
      if (randArr[i] == 8) {
      } else {
        randBox.style.backgroundImage = `url(./images/resize_img/${image}.jpg)`;
      }
      randBox.onclick = function () {
        const eBox = document.querySelector(".box_8");
        eBox.classList.remove("box_8", "box");
        eBox.className = this.className;
        eBox.style.backgroundImage = this.style.backgroundImage;
        this.style.removeProperty("background-image");
        this.style.backgroundColor = "tomato";
        this.className = "box_8 box";

        const checkArr = document.querySelectorAll(".box");
        if (
          arr[0].className == checkArr[0].className &&
          arr[1].className == checkArr[1].className &&
          arr[2].className == checkArr[2].className &&
          arr[3].className == checkArr[3].className &&
          arr[4].className == checkArr[4].className &&
          arr[5].className == checkArr[5].className &&
          arr[6].className == checkArr[6].className &&
          arr[7].className == checkArr[7].className &&
          arr[8].className == checkArr[8].className
        ) {
          setTimeout(function () {
            alert("퍼즐 성공");
            location.href = `./gallery_detail/${image}.html`;
          }, 500);
        }
      };
      modalPuzzle.appendChild(randBox);
    }
  };

  modalOverlay.appendChild(modalContent);
  modalContent.appendChild(modalTitle);
  modalOriginal.appendChild(originalImg);
  modalImage.appendChild(modalPuzzle);
  modalImage.appendChild(modalOriginal);
  modalContent.appendChild(modalText);
  modalContent.appendChild(modalImage);
  modalContent.appendChild(puzzleStart);
  modalContent.appendChild(modalClose);
  newModal.appendChild(modalOverlay);
  wrap.appendChild(newModal);
}

function portrait_of_dora_maar() {
  modalFunc("portrait_of_dora_maar");
}

function garcon_a_la_pipe() {
  modalFunc("garcon_a_la_pipe");
}

function gertrude_stein() {
  modalFunc("gertrude_stein");
}

function girl_before_a_mirror() {
  modalFunc("girl_before_a_mirror");
}

function les_demoiselles_davignon() {
  modalFunc("les_demoiselles_davignon");
}

function picasso() {
  modalFunc("picasso");
}

function the_dream() {
  modalFunc("the_dream");
}

function the_old_guitarist() {
  modalFunc("the_old_guitarist");
}

function the_weeping_woman() {
  modalFunc("the_weeping_woman");
}
