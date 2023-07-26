function showModal(modalElem, backdrop) {
  modalElem.classList.add("show");
  backdrop.classList.remove("hidden");
  const phone = document.querySelector("#phone-modal");
  if (phone.value) {
    window.isValidPhone = true;
  } else {
    window.isValidPhone = false;
  }
}

function hideModal(modalElem, backdrop) {
  modalElem.classList.remove("show");
  backdrop.classList.add("hidden");
  const phone = document.querySelector("#phone");
  if (phone.value) {
    window.isValidPhone = true;
  } else {
    window.isValidPhone = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-cases", {
    // Optional parameters
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-cases .swiper-button-next",
      prevEl: ".swiper-cases .swiper-button-prev",
    },

    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
      767: {
        slidesPerView: 6,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  const swiper2 = new Swiper(".swiper-reviews ", {
    // Optional parameters
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-reviews .swiper-button-next",
      prevEl: ".swiper-reviews .swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  (function () {
    const backdrop = document.querySelector("#modal-backdrop");
    document.addEventListener("click", modalHandler);
    document
      .querySelector("#btn-success")
      .addEventListener("click", () =>
        hideModal(document.querySelector("#modal_2"), backdrop)
      );
    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest(".js-modal");
      if (modalBtnOpen) {
        // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector), backdrop);
      }

      const modalBtnClose = evt.target.closest(".modal-close");
      if (modalBtnClose) {
        // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest(".modal-window"), backdrop);
      }

      if (evt.target.matches("#modal-backdrop")) {
        // backdrop click
        hideModal(document.querySelector(".modal-window.show"), backdrop);
      }
    }
  })();

  document.querySelectorAll(".card__swiper-container").forEach((n) => {
    const thumbs = new Swiper(n.querySelector(".mySwiper"), {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: true,
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
    const slider = new Swiper(n.querySelector(".mySwiper2"), {
      spaceBetween: 10,
      navigation: {
        nextEl: n.querySelector(".swiper-button-next"),
        prevEl: n.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: thumbs,
      },
    });
  });

  const cards = document.querySelectorAll(".cases__carousel .swiper-slide");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(card);
      //document.querySelector("body").classList.add("hidden");
      const cardAtr = card.getAttribute("data-swiper-slide-index");
      const cardModals = document.querySelectorAll(".card-modal");
      cardModals[cardAtr].classList.remove("hidden");
    });
  });

  $(".card__close").click(function () {
    $(".card-modal").addClass("hidden");
    $("body").removeClass("hidden");
  });

  $(".show-uno").click(function () {
    $(".card-uno").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });
  $(".show-bdns").click(function () {
    $(".card-bdns").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });
  $(".show-dwill").click(function () {
    $(".card-dwill").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  $("#showSwapcaseCase").click(function () {
    $(".card-swapcase").removeClass("hidden");
    // document.querySelector("body").classList.add("hidden");
  });

  $("#showAmnextCase").click(function () {
    $(".card-amnext").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  $("#showSpicyNetworkCase").click(function () {
    $(".card-spicy").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  const inputFieldsForValidation = document.querySelectorAll("[type='tel']");
  inputFieldsForValidation.forEach((i) => {
    i.addEventListener("change", (e) => {
      const phone = e.target.value;
      const id = e.target.id;

      const code = window.code;
      const numberLength = Number(phoneBook[code.trim()]);

      if (phone.replace(/\D/g, "").length < numberLength) {
        document.querySelector(
          `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
        ).innerHTML = `Phone number must be ${numberLength} digits`;
      } else {
        document.querySelector(
          `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
        ).innerHTML = "";
      }
    });
  });

  const inputFieldPhoneForValidation = document.querySelector("#phone");
  const inputFieldPhoneFromModalForValidation =
    document.querySelector("#phone-modal");

  function hadnlePhoneInput(e) {
    // Разрешаем: backspace, delete, tab и escape
    if (
      event.keyCode == 46 ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if (
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105)
      ) {
        event.preventDefault();
      }
    }
  }

  function validatePhone(e) {
    const phone = e.target.value;
    const id = e.target.id;
    // isToggleContry = false;
    const code = window.code;

    const numberLength = Number(phoneBook[code.trim()]);

    const submitForm = document.querySelector(
      `${id === "phone" ? "#submit" : "#submit-modal"}`
    );

    const reuqireSymbol = document.querySelector("#require-symbol");
    if (phone.length > 0 && id === "phone") {
      reuqireSymbol.style.display = "none";
    }
    if (phone.length === 0 && id === "phone") {
      reuqireSymbol.style.display = "inline-block";
    }
    if (String(phone).length > numberLength) {
      if (id === "phone") {
        inputFieldPhoneForValidation.value = String(phone).slice(
          0,
          numberLength
        );
      } else {
        inputFieldPhoneFromModalForValidation.value = String(phone).slice(
          0,
          numberLength
        );
      }
    }
    if (phone.replace(/\D/g, "").length < numberLength) {
      submitForm.classList.add("btn-default__disable");

      submitForm.setAttribute("disabled", "");
      window.isValidPhone = false;
    } else if (phone.replace(/\D/g, "").length === numberLength) {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector(
        `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
      ).innerHTML = "";
      window.isValidPhone = true;
      submitForm.removeAttribute("disabled");
    }
  }

  inputFieldPhoneForValidation.addEventListener("keydown", (e) =>
    hadnlePhoneInput(e)
  );
  inputFieldPhoneFromModalForValidation.addEventListener("keydown", (e) =>
    hadnlePhoneInput(e)
  );

  inputFieldPhoneForValidation.addEventListener("input", (e) =>
    validatePhone(e)
  );

  inputFieldPhoneFromModalForValidation.addEventListener("input", (e) =>
    validatePhone(e)
  );

  const inputFieldEmailValidation = document.querySelector("#form-email");
  inputFieldEmailValidation.onblur = function () {
    document.querySelector("#form-successmsg").innerHTML = "";
  };
  inputFieldEmailValidation.addEventListener("input", (e) => {
    const email = e.target.value;
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.length && window.isValidPhone) {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML = "";
    } else if (!email.match(regex)) {
      submitForm.classList.add("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML =
        "Please provide a valid email address";
      submitForm.setAttribute("disabled", "");
    } else {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML = "";
      submitForm.removeAttribute("disabled");
    }
  });

  async function validateForm(evt) {
    evt.preventDefault();
    const id = evt.target.id;
    if (!window.isValidPhone) {
      document.querySelector("#form-successmsg").innerHTML =
        "Please fill in all required fields correctly (*)";
      return;
    }

    const name = document.querySelector("#form-name").value;
    const text = document.querySelector("#form-textarea").value;
    const socialMedia = document.querySelector(
      `${id === "submit" ? "#form-selectbox" : "#form-selectbox-modal"}`
    ).selectedOptions[0].value;
    let contact;
    let payload;
    let dialcode;
    let email;

    if (socialMedia === "Whatsapp" || socialMedia === "Telegram") {
      dialcode = document.querySelector(
        `${id === "submit" ? "#dialcode" : "#dialcode-modal"}`
      ).innerHTML;
      contact = document.querySelector(
        `${id === "submit" ? "#phone" : "#phone-modal"}`
      ).value;
      email = document.querySelector("#form-email").value;
      payload =
        "Name: " +
        name +
        ", Preferred Social Media: " +
        socialMedia +
        ", Contact: " +
        dialcode +
        contact +
        ", Email: " +
        email +
        ", Text: " +
        text;
    } else {
      contact = document.querySelector("#form-contact").value;
      console.log(document.querySelector("#form-email"));
      email = document.querySelector("#form-email").value;
      payload =
        "Name: " +
        name +
        ", Preferred Social Media: " +
        socialMedia +
        ", Contact: " +
        contact +
        ", Email: " +
        email +
        ", Text: " +
        text;
    }

    if (contact && socialMedia) {
      console.log(contact && socialMedia);
      if (socialMedia === "Whatsapp" || socialMedia === "Telegram") {
        let pattern = new RegExp(
          /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
        );

        if (pattern.test(dialcode + "" + contact) === false) {
          if (submitForm.getAttribute("data-translation") === "ru") {
            document.querySelector("#form-successmsg").innerHTML =
              'Пожалуйста, введите ваш номер телефона с префикс кодом страны включая знак "+", например: +66 123 456 78 90';
          } else {
            document.querySelector("#form-successmsg").innerHTML =
              'Please provide your phone number with the country code including the "+" sign, for example: +66 123 456 78 90';
          }
          document.querySelector("#phone").style.border = "1px solid #F2633F";
        } else {
          console.log(
            id === "submit" ? submitForm : submitFormFromModal,
            payload,
            name,
            text,
            socialMedia,
            dialcode,
            contact,
            email
          );

          sendFormTg(
            id === "submit" ? submitForm : submitFormFromModal,
            payload
          );
          sendForm(
            id === "submit" ? submitForm : submitFormFromModal,
            payload,
            name,
            text,
            socialMedia,
            dialcode,
            contact
          );
        }
      } else {
        let pattern =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (contact.match(pattern)) {
          sendFormTg(submitForm, payload);
          sendForm(submitForm, payload, name, text, socialMedia, 0, contact);
        } else {
          if (submitForm.getAttribute("data-translation") === "ru") {
            document.querySelector("#form-successmsg").innerHTML =
              "Пожалуйста, введите корректный email адрес";
          } else {
            document.querySelector("#form-successmsg").innerHTML =
              "Please provide a valid email address";
          }
          document.querySelector("#form-contact").style.border =
            "1px solid #F2633F";
        }
      }
    } else {
      if (socialMedia === "Email") {
        document.querySelector("#form-contact").style.border =
          "1px solid #F2633F";
      } else {
        document.querySelector("#phone").style.border = "1px solid #F2633F";
      }
    }
  }

  const submitForm = document.querySelector("#submit");
  const submitFormFromModal = document.querySelector("#submit-modal");
  submitForm.addEventListener("click", async (evt) => await validateForm(evt));
  submitFormFromModal.addEventListener(
    "click",
    async (evt) => await validateForm(evt)
  );

  const imgsForPreview = document.querySelectorAll(
    "#fullscreen-preview-available"
  );
  const preview = document.querySelector("#fullpage");

  imgsForPreview.forEach((img) => {
    img.addEventListener("click", () => {
      preview.style.backgroundImage = "url(" + img.src + ")";
      preview.style.display = "block";
    });
  });
});

async function sendForm(
  submitForm,
  payload,
  name,
  text,
  socialMedia,
  dialcode,
  contact
) {
  console.log(payload);
  try {
    const response = await fetch(`https://api.teckone.space/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "-1001934018673",
        name: name,
        contact_type: socialMedia,
        contact: dialcode ? dialcode + contact : contact,
        text: text,
      }),
    });
    console.log("data sent, response: ", response);

    if (submitForm.getAttribute("data-translation") === "ru") {
      document.querySelector("#form-successmsg").innerHTML =
        "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
    } else {
      document.querySelector("#form-successmsg").innerHTML =
        "Thank you! Your message has been sent. We will contact you shortly!";
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

async function sendForm(
  submitForm,
  payload,
  name,
  text,
  socialMedia,
  dialcode,
  contact
) {
  console.log(payload);
  try {
    const response = await fetch(`https://api.teckone.space/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "-1001934018673",
        name: name,
        contact_type: socialMedia,
        contact: dialcode ? dialcode + contact : contact,
        text: text,
      }),
    });
    console.log("data sent, response: ", response);
    if (submitForm.id === "submit") {
      if (submitForm.getAttribute("data-translation") === "ru") {
        document.querySelector("#form-successmsg").innerHTML =
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
      } else {
        document.querySelector("#form-successmsg").innerHTML =
          "Thank you! Your message has been sent. We will contact you shortly!";
      }
    } else {
      const backdrop = document.querySelector("#modal-backdrop");
      hideModal(document.querySelector("#modal_1"), backdrop);
      showModal(document.querySelector("#modal_2"), backdrop);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

async function sendFormTg(submitForm, payload) {
  console.log(payload);
  try {
    const response = await fetch(
      `https://api.telegram.org/bot6114804487:AAEA_7_WXXXMMiy57wLpy79OQ0C0QfF5RQ0/sendMessage`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_id: "-1001934018673", text: payload }),
      }
    );
    console.log("data sent, response: ", response);
    console.log(submitForm.id);
    if (submitForm.id === "submit") {
      if (submitForm.getAttribute("data-translation") === "ru") {
        document.querySelector("#form-successmsg").innerHTML =
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
      } else {
        document.querySelector("#form-successmsg").innerHTML =
          "Thank you! Your message has been sent. We will contact you shortly!";
      }
    } else {
      console.log(document.querySelector("#modal_1"));
      const backdrop = document.querySelector("#modal-backdrop");
      hideModal(document.querySelector("#modal_1"), backdrop);
      showModal(document.querySelector("#modal_2"), backdrop);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3dNb2RhbChtb2RhbEVsZW0sIGJhY2tkcm9wKSB7XG4gIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lLW1vZGFsXCIpO1xuICBpZiAocGhvbmUudmFsdWUpIHtcbiAgICB3aW5kb3cuaXNWYWxpZFBob25lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuaXNWYWxpZFBob25lID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZU1vZGFsKG1vZGFsRWxlbSwgYmFja2Ryb3ApIHtcbiAgbW9kYWxFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG4gIGlmIChwaG9uZS52YWx1ZSkge1xuICAgIHdpbmRvdy5pc1ZhbGlkUGhvbmUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5pc1ZhbGlkUGhvbmUgPSBmYWxzZTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLWNhc2VzXCIsIHtcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgIH0sXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnN3aXBlci1jYXNlcyAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1jYXNlcyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfSxcblxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogNCxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNzY3OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLXJldmlld3MgXCIsIHtcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgLy8gbG9vcDogdHJ1ZSxcbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLXJldmlld3MgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItcmV2aWV3cyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfSxcblxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA3Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYmFja2Ryb3BcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1vZGFsSGFuZGxlcik7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1zdWNjZXNzXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICAgIGhpZGVNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXzJcIiksIGJhY2tkcm9wKVxuICAgICAgKTtcbiAgICBmdW5jdGlvbiBtb2RhbEhhbmRsZXIoZXZ0KSB7XG4gICAgICBjb25zdCBtb2RhbEJ0bk9wZW4gPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuanMtbW9kYWxcIik7XG4gICAgICBpZiAobW9kYWxCdG5PcGVuKSB7XG4gICAgICAgIC8vIG9wZW4gYnRuIGNsaWNrXG4gICAgICAgIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBtb2RhbEJ0bk9wZW4uZGF0YXNldC5tb2RhbDtcbiAgICAgICAgc2hvd01vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxTZWxlY3RvciksIGJhY2tkcm9wKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kYWxCdG5DbG9zZSA9IGV2dC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jbG9zZVwiKTtcbiAgICAgIGlmIChtb2RhbEJ0bkNsb3NlKSB7XG4gICAgICAgIC8vIGNsb3NlIGJ0biBjbGlja1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZU1vZGFsKG1vZGFsQnRuQ2xvc2UuY2xvc2VzdChcIi5tb2RhbC13aW5kb3dcIiksIGJhY2tkcm9wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2dC50YXJnZXQubWF0Y2hlcyhcIiNtb2RhbC1iYWNrZHJvcFwiKSkge1xuICAgICAgICAvLyBiYWNrZHJvcCBjbGlja1xuICAgICAgICBoaWRlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC13aW5kb3cuc2hvd1wiKSwgYmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX3N3aXBlci1jb250YWluZXJcIikuZm9yRWFjaCgobikgPT4ge1xuICAgIGNvbnN0IHRodW1icyA9IG5ldyBTd2lwZXIobi5xdWVyeVNlbGVjdG9yKFwiLm15U3dpcGVyXCIpLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3Qgc2xpZGVyID0gbmV3IFN3aXBlcihuLnF1ZXJ5U2VsZWN0b3IoXCIubXlTd2lwZXIyXCIpLCB7XG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IG4ucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItYnV0dG9uLW5leHRcIiksXG4gICAgICAgIHByZXZFbDogbi5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlci1idXR0b24tcHJldlwiKSxcbiAgICAgIH0sXG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiB0aHVtYnMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FzZXNfX2Nhcm91c2VsIC5zd2lwZXItc2xpZGVcIik7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhjYXJkKTtcbiAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGNvbnN0IGNhcmRBdHIgPSBjYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpO1xuICAgICAgY29uc3QgY2FyZE1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZC1tb2RhbFwiKTtcbiAgICAgIGNhcmRNb2RhbHNbY2FyZEF0cl0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJChcIi5jYXJkX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5jYXJkLW1vZGFsXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICAkKFwiLnNob3ctdW5vXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmNhcmQtdW5vXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG4gICQoXCIuc2hvdy1iZG5zXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmNhcmQtYmRuc1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuICAkKFwiLnNob3ctZHdpbGxcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCIuY2FyZC1kd2lsbFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gICQoXCIjc2hvd1N3YXBjYXNlQ2FzZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5jYXJkLXN3YXBjYXNlXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gICQoXCIjc2hvd0FtbmV4dENhc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoXCIuY2FyZC1hbW5leHRcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICAkKFwiI3Nob3dTcGljeU5ldHdvcmtDYXNlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmNhcmQtc3BpY3lcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBpbnB1dEZpZWxkc0ZvclZhbGlkYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3R5cGU9J3RlbCddXCIpO1xuICBpbnB1dEZpZWxkc0ZvclZhbGlkYXRpb24uZm9yRWFjaCgoaSkgPT4ge1xuICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcGhvbmUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG5cbiAgICAgIGNvbnN0IGNvZGUgPSB3aW5kb3cuY29kZTtcbiAgICAgIGNvbnN0IG51bWJlckxlbmd0aCA9IE51bWJlcihwaG9uZUJvb2tbY29kZS50cmltKCldKTtcblxuICAgICAgaWYgKHBob25lLnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5sZW5ndGggPCBudW1iZXJMZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgJHtpZCA9PT0gXCJwaG9uZVwiID8gXCIjZm9ybS1zdWNjZXNzbXNnXCIgOiBcIiNmb3JtLXN1Y2Nlc3Ntc2ctbW9kYWxcIn1gXG4gICAgICAgICkuaW5uZXJIVE1MID0gYFBob25lIG51bWJlciBtdXN0IGJlICR7bnVtYmVyTGVuZ3RofSBkaWdpdHNgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgJHtpZCA9PT0gXCJwaG9uZVwiID8gXCIjZm9ybS1zdWNjZXNzbXNnXCIgOiBcIiNmb3JtLXN1Y2Nlc3Ntc2ctbW9kYWxcIn1gXG4gICAgICAgICkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRGaWVsZFBob25lRm9yVmFsaWRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XG4gIGNvbnN0IGlucHV0RmllbGRQaG9uZUZyb21Nb2RhbEZvclZhbGlkYXRpb24gPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtbW9kYWxcIik7XG5cbiAgZnVuY3Rpb24gaGFkbmxlUGhvbmVJbnB1dChlKSB7XG4gICAgLy8g0KDQsNC30YDQtdGI0LDQtdC8OiBiYWNrc3BhY2UsIGRlbGV0ZSwgdGFiINC4IGVzY2FwZVxuICAgIGlmIChcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gNDYgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT0gOCB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PSA5IHx8XG4gICAgICBldmVudC5rZXlDb2RlID09IDI3IHx8XG4gICAgICAvLyDQoNCw0LfRgNC10YjQsNC10Lw6IEN0cmwrQVxuICAgICAgKGV2ZW50LmtleUNvZGUgPT0gNjUgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHxcbiAgICAgIC8vINCg0LDQt9GA0LXRiNCw0LXQvDogaG9tZSwgZW5kLCDQstC70LXQstC+LCDQstC/0YDQsNCy0L5cbiAgICAgIChldmVudC5rZXlDb2RlID49IDM1ICYmIGV2ZW50LmtleUNvZGUgPD0gMzkpXG4gICAgKSB7XG4gICAgICAvLyDQndC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC10LxcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g0JfQsNC/0YDQtdGJ0LDQtdC8INCy0YHQtSwg0LrRgNC+0LzQtSDRhtC40YTRgCDQvdCwINC+0YHQvdC+0LLQvdC+0Lkg0LrQu9Cw0LLQuNCw0YLRg9GA0LUsINCwINGC0LDQuiDQttC1IE51bS3QutC70LDQstC40LDRgtGD0YDQtVxuICAgICAgaWYgKFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA8IDQ4IHx8IGV2ZW50LmtleUNvZGUgPiA1NykgJiZcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPCA5NiB8fCBldmVudC5rZXlDb2RlID4gMTA1KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVQaG9uZShlKSB7XG4gICAgY29uc3QgcGhvbmUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIC8vIGlzVG9nZ2xlQ29udHJ5ID0gZmFsc2U7XG4gICAgY29uc3QgY29kZSA9IHdpbmRvdy5jb2RlO1xuXG4gICAgY29uc3QgbnVtYmVyTGVuZ3RoID0gTnVtYmVyKHBob25lQm9va1tjb2RlLnRyaW0oKV0pO1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtpZCA9PT0gXCJwaG9uZVwiID8gXCIjc3VibWl0XCIgOiBcIiNzdWJtaXQtbW9kYWxcIn1gXG4gICAgKTtcblxuICAgIGNvbnN0IHJldXFpcmVTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcXVpcmUtc3ltYm9sXCIpO1xuICAgIGlmIChwaG9uZS5sZW5ndGggPiAwICYmIGlkID09PSBcInBob25lXCIpIHtcbiAgICAgIHJldXFpcmVTeW1ib2wuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBpZiAocGhvbmUubGVuZ3RoID09PSAwICYmIGlkID09PSBcInBob25lXCIpIHtcbiAgICAgIHJldXFpcmVTeW1ib2wuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgfVxuICAgIGlmIChTdHJpbmcocGhvbmUpLmxlbmd0aCA+IG51bWJlckxlbmd0aCkge1xuICAgICAgaWYgKGlkID09PSBcInBob25lXCIpIHtcbiAgICAgICAgaW5wdXRGaWVsZFBob25lRm9yVmFsaWRhdGlvbi52YWx1ZSA9IFN0cmluZyhwaG9uZSkuc2xpY2UoXG4gICAgICAgICAgMCxcbiAgICAgICAgICBudW1iZXJMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0RmllbGRQaG9uZUZyb21Nb2RhbEZvclZhbGlkYXRpb24udmFsdWUgPSBTdHJpbmcocGhvbmUpLnNsaWNlKFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbnVtYmVyTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwaG9uZS5yZXBsYWNlKC9cXEQvZywgXCJcIikubGVuZ3RoIDwgbnVtYmVyTGVuZ3RoKSB7XG4gICAgICBzdWJtaXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJidG4tZGVmYXVsdF9fZGlzYWJsZVwiKTtcblxuICAgICAgc3VibWl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgIHdpbmRvdy5pc1ZhbGlkUGhvbmUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHBob25lLnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5sZW5ndGggPT09IG51bWJlckxlbmd0aCkge1xuICAgICAgc3VibWl0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuLWRlZmF1bHRfX2Rpc2FibGVcIik7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAke2lkID09PSBcInBob25lXCIgPyBcIiNmb3JtLXN1Y2Nlc3Ntc2dcIiA6IFwiI2Zvcm0tc3VjY2Vzc21zZy1tb2RhbFwifWBcbiAgICAgICkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHdpbmRvdy5pc1ZhbGlkUGhvbmUgPSB0cnVlO1xuICAgICAgc3VibWl0Rm9ybS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dEZpZWxkUGhvbmVGb3JWYWxpZGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PlxuICAgIGhhZG5sZVBob25lSW5wdXQoZSlcbiAgKTtcbiAgaW5wdXRGaWVsZFBob25lRnJvbU1vZGFsRm9yVmFsaWRhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT5cbiAgICBoYWRubGVQaG9uZUlucHV0KGUpXG4gICk7XG5cbiAgaW5wdXRGaWVsZFBob25lRm9yVmFsaWRhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+XG4gICAgdmFsaWRhdGVQaG9uZShlKVxuICApO1xuXG4gIGlucHV0RmllbGRQaG9uZUZyb21Nb2RhbEZvclZhbGlkYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PlxuICAgIHZhbGlkYXRlUGhvbmUoZSlcbiAgKTtcblxuICBjb25zdCBpbnB1dEZpZWxkRW1haWxWYWxpZGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWVtYWlsXCIpO1xuICBpbnB1dEZpZWxkRW1haWxWYWxpZGF0aW9uLm9uYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VjY2Vzc21zZ1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuICBpbnB1dEZpZWxkRW1haWxWYWxpZGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgcmVnZXggPSAvXlteIF0rQFteIF0rXFwuW2Etel17MiwzfSQvO1xuICAgIGlmICghZW1haWwubGVuZ3RoICYmIHdpbmRvdy5pc1ZhbGlkUGhvbmUpIHtcbiAgICAgIHN1Ym1pdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1kZWZhdWx0X19kaXNhYmxlXCIpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VjY2Vzc21zZ1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0gZWxzZSBpZiAoIWVtYWlsLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgc3VibWl0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiYnRuLWRlZmF1bHRfX2Rpc2FibGVcIik7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1zdWNjZXNzbXNnXCIpLmlubmVySFRNTCA9XG4gICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gICAgICBzdWJtaXRGb3JtLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tZGVmYXVsdF9fZGlzYWJsZVwiKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHN1Ym1pdEZvcm0ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWQgPSBldnQudGFyZ2V0LmlkO1xuICAgIGlmICghd2luZG93LmlzVmFsaWRQaG9uZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID1cbiAgICAgICAgXCJQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzIGNvcnJlY3RseSAoKilcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLW5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICBjb25zdCBzb2NpYWxNZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtpZCA9PT0gXCJzdWJtaXRcIiA/IFwiI2Zvcm0tc2VsZWN0Ym94XCIgOiBcIiNmb3JtLXNlbGVjdGJveC1tb2RhbFwifWBcbiAgICApLnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICBsZXQgY29udGFjdDtcbiAgICBsZXQgcGF5bG9hZDtcbiAgICBsZXQgZGlhbGNvZGU7XG4gICAgbGV0IGVtYWlsO1xuXG4gICAgaWYgKHNvY2lhbE1lZGlhID09PSBcIldoYXRzYXBwXCIgfHwgc29jaWFsTWVkaWEgPT09IFwiVGVsZWdyYW1cIikge1xuICAgICAgZGlhbGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgJHtpZCA9PT0gXCJzdWJtaXRcIiA/IFwiI2RpYWxjb2RlXCIgOiBcIiNkaWFsY29kZS1tb2RhbFwifWBcbiAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAke2lkID09PSBcInN1Ym1pdFwiID8gXCIjcGhvbmVcIiA6IFwiI3Bob25lLW1vZGFsXCJ9YFxuICAgICAgKS52YWx1ZTtcbiAgICAgIGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWVtYWlsXCIpLnZhbHVlO1xuICAgICAgcGF5bG9hZCA9XG4gICAgICAgIFwiTmFtZTogXCIgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgXCIsIFByZWZlcnJlZCBTb2NpYWwgTWVkaWE6IFwiICtcbiAgICAgICAgc29jaWFsTWVkaWEgK1xuICAgICAgICBcIiwgQ29udGFjdDogXCIgK1xuICAgICAgICBkaWFsY29kZSArXG4gICAgICAgIGNvbnRhY3QgK1xuICAgICAgICBcIiwgRW1haWw6IFwiICtcbiAgICAgICAgZW1haWwgK1xuICAgICAgICBcIiwgVGV4dDogXCIgK1xuICAgICAgICB0ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhY3RcIikudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZW1haWxcIikpO1xuICAgICAgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZW1haWxcIikudmFsdWU7XG4gICAgICBwYXlsb2FkID1cbiAgICAgICAgXCJOYW1lOiBcIiArXG4gICAgICAgIG5hbWUgK1xuICAgICAgICBcIiwgUHJlZmVycmVkIFNvY2lhbCBNZWRpYTogXCIgK1xuICAgICAgICBzb2NpYWxNZWRpYSArXG4gICAgICAgIFwiLCBDb250YWN0OiBcIiArXG4gICAgICAgIGNvbnRhY3QgK1xuICAgICAgICBcIiwgRW1haWw6IFwiICtcbiAgICAgICAgZW1haWwgK1xuICAgICAgICBcIiwgVGV4dDogXCIgK1xuICAgICAgICB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChjb250YWN0ICYmIHNvY2lhbE1lZGlhKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb250YWN0ICYmIHNvY2lhbE1lZGlhKTtcbiAgICAgIGlmIChzb2NpYWxNZWRpYSA9PT0gXCJXaGF0c2FwcFwiIHx8IHNvY2lhbE1lZGlhID09PSBcIlRlbGVncmFtXCIpIHtcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgIC9cXCsoOVs5NzZdXFxkfDhbOTg3NTMwXVxcZHw2Wzk4N11cXGR8NVs5MF1cXGR8NDJcXGR8M1s4NzVdXFxkfDJbOTg2NTQzMjFdXFxkfDlbODU0MzIxMF18OFs2NDIxXXw2WzY1NDMyMTBdfDVbODc2NTQzMjFdfDRbOTg3NjU0MzEwXXwzWzk2NDMyMTBdfDJbNzBdfDd8MSlcXGR7MSwxNH0kL1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QoZGlhbGNvZGUgKyBcIlwiICsgY29udGFjdCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKHN1Ym1pdEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGlvblwiKSA9PT0gXCJydVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VjY2Vzc21zZ1wiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0YEg0L/RgNC10YTQuNC60YEg0LrQvtC00L7QvCDRgdGC0YDQsNC90Ysg0LLQutC70Y7Rh9Cw0Y8g0LfQvdCw0LogXCIrXCIsINC90LDQv9GA0LjQvNC10YA6ICs2NiAxMjMgNDU2IDc4IDkwJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJ1BsZWFzZSBwcm92aWRlIHlvdXIgcGhvbmUgbnVtYmVyIHdpdGggdGhlIGNvdW50cnkgY29kZSBpbmNsdWRpbmcgdGhlIFwiK1wiIHNpZ24sIGZvciBleGFtcGxlOiArNjYgMTIzIDQ1NiA3OCA5MCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIikuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0YyNjMzRlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgaWQgPT09IFwic3VibWl0XCIgPyBzdWJtaXRGb3JtIDogc3VibWl0Rm9ybUZyb21Nb2RhbCxcbiAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHNvY2lhbE1lZGlhLFxuICAgICAgICAgICAgZGlhbGNvZGUsXG4gICAgICAgICAgICBjb250YWN0LFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgc2VuZEZvcm1UZyhcbiAgICAgICAgICAgIGlkID09PSBcInN1Ym1pdFwiID8gc3VibWl0Rm9ybSA6IHN1Ym1pdEZvcm1Gcm9tTW9kYWwsXG4gICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZW5kRm9ybShcbiAgICAgICAgICAgIGlkID09PSBcInN1Ym1pdFwiID8gc3VibWl0Rm9ybSA6IHN1Ym1pdEZvcm1Gcm9tTW9kYWwsXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBzb2NpYWxNZWRpYSxcbiAgICAgICAgICAgIGRpYWxjb2RlLFxuICAgICAgICAgICAgY29udGFjdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwYXR0ZXJuID1cbiAgICAgICAgICAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcbiAgICAgICAgaWYgKGNvbnRhY3QubWF0Y2gocGF0dGVybikpIHtcbiAgICAgICAgICBzZW5kRm9ybVRnKHN1Ym1pdEZvcm0sIHBheWxvYWQpO1xuICAgICAgICAgIHNlbmRGb3JtKHN1Ym1pdEZvcm0sIHBheWxvYWQsIG5hbWUsIHRleHQsIHNvY2lhbE1lZGlhLCAwLCBjb250YWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3VibWl0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0aW9uXCIpID09PSBcInJ1XCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1zdWNjZXNzbXNnXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgIFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IGVtYWlsINCw0LTRgNC10YFcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWNvbnRhY3RcIikuc3R5bGUuYm9yZGVyID1cbiAgICAgICAgICAgIFwiMXB4IHNvbGlkICNGMjYzM0ZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc29jaWFsTWVkaWEgPT09IFwiRW1haWxcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFjdFwiKS5zdHlsZS5ib3JkZXIgPVxuICAgICAgICAgIFwiMXB4IHNvbGlkICNGMjYzM0ZcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIikuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0YyNjMzRlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbiAgY29uc3Qgc3VibWl0Rm9ybUZyb21Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LW1vZGFsXCIpO1xuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZ0KSA9PiBhd2FpdCB2YWxpZGF0ZUZvcm0oZXZ0KSk7XG4gIHN1Ym1pdEZvcm1Gcm9tTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgYXN5bmMgKGV2dCkgPT4gYXdhaXQgdmFsaWRhdGVGb3JtKGV2dClcbiAgKTtcblxuICBjb25zdCBpbWdzRm9yUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIjZnVsbHNjcmVlbi1wcmV2aWV3LWF2YWlsYWJsZVwiXG4gICk7XG4gIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGxwYWdlXCIpO1xuXG4gIGltZ3NGb3JQcmV2aWV3LmZvckVhY2goKGltZykgPT4ge1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIGltZy5zcmMgKyBcIilcIjtcbiAgICAgIHByZXZpZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gc2VuZEZvcm0oXG4gIHN1Ym1pdEZvcm0sXG4gIHBheWxvYWQsXG4gIG5hbWUsXG4gIHRleHQsXG4gIHNvY2lhbE1lZGlhLFxuICBkaWFsY29kZSxcbiAgY29udGFjdFxuKSB7XG4gIGNvbnNvbGUubG9nKHBheWxvYWQpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRlY2tvbmUuc3BhY2Uvc2VuZE1lc3NhZ2VgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNoYXRfaWQ6IFwiLTEwMDE5MzQwMTg2NzNcIixcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgY29udGFjdF90eXBlOiBzb2NpYWxNZWRpYSxcbiAgICAgICAgY29udGFjdDogZGlhbGNvZGUgPyBkaWFsY29kZSArIGNvbnRhY3QgOiBjb250YWN0LFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIHNlbnQsIHJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuXG4gICAgaWYgKHN1Ym1pdEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGlvblwiKSA9PT0gXCJydVwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VjY2Vzc21zZ1wiKS5pbm5lckhUTUwgPVxuICAgICAgICBcItCh0L/QsNGB0LjQsdC+ISDQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4uINCc0Ysg0YHQstGP0LbQtdC80YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID1cbiAgICAgICAgXCJUaGFuayB5b3UhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHkhXCI7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRGb3JtKFxuICBzdWJtaXRGb3JtLFxuICBwYXlsb2FkLFxuICBuYW1lLFxuICB0ZXh0LFxuICBzb2NpYWxNZWRpYSxcbiAgZGlhbGNvZGUsXG4gIGNvbnRhY3Rcbikge1xuICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50ZWNrb25lLnNwYWNlL3NlbmRNZXNzYWdlYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjaGF0X2lkOiBcIi0xMDAxOTM0MDE4NjczXCIsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNvbnRhY3RfdHlwZTogc29jaWFsTWVkaWEsXG4gICAgICAgIGNvbnRhY3Q6IGRpYWxjb2RlID8gZGlhbGNvZGUgKyBjb250YWN0IDogY29udGFjdCxcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBzZW50LCByZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcbiAgICBpZiAoc3VibWl0Rm9ybS5pZCA9PT0gXCJzdWJtaXRcIikge1xuICAgICAgaWYgKHN1Ym1pdEZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGlvblwiKSA9PT0gXCJydVwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1zdWNjZXNzbXNnXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgXCLQodC/0LDRgdC40LHQviEg0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQnNGLINGB0LLRj9C20LXQvNGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8hXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tc3VjY2Vzc21zZ1wiKS5pbm5lckhUTUwgPVxuICAgICAgICAgIFwiVGhhbmsgeW91ISBZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudC4gV2Ugd2lsbCBjb250YWN0IHlvdSBzaG9ydGx5IVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYmFja2Ryb3BcIik7XG4gICAgICBoaWRlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF8xXCIpLCBiYWNrZHJvcCk7XG4gICAgICBzaG93TW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF8yXCIpLCBiYWNrZHJvcCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRGb3JtVGcoc3VibWl0Rm9ybSwgcGF5bG9hZCkge1xuICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Q2MTE0ODA0NDg3OkFBRUFfN19XWFhYTU1peTU3d0xweTc5T1EwQzBRZkY1UlEwL3NlbmRNZXNzYWdlYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhdF9pZDogXCItMTAwMTkzNDAxODY3M1wiLCB0ZXh0OiBwYXlsb2FkIH0pLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhIHNlbnQsIHJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICAgIGNvbnNvbGUubG9nKHN1Ym1pdEZvcm0uaWQpO1xuICAgIGlmIChzdWJtaXRGb3JtLmlkID09PSBcInN1Ym1pdFwiKSB7XG4gICAgICBpZiAoc3VibWl0Rm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0aW9uXCIpID09PSBcInJ1XCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXN1Y2Nlc3Ntc2dcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICBcItCh0L/QsNGB0LjQsdC+ISDQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4uINCc0Ysg0YHQstGP0LbQtdC80YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyFcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1zdWNjZXNzbXNnXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgXCJUaGFuayB5b3UhIFlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50LiBXZSB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHkhXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxfMVwiKSk7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtYmFja2Ryb3BcIik7XG4gICAgICBoaWRlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF8xXCIpLCBiYWNrZHJvcCk7XG4gICAgICBzaG93TW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbF8yXCIpLCBiYWNrZHJvcCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICB9XG59XG4iXSwiZmlsZSI6Im1haW4uanMifQ==
