var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20tc2VsZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB4LCBpLCBqLCBsLCBsbCwgc2VsRWxtbnQsIGEsIGIsIGM7XG4vKiBMb29rIGZvciBhbnkgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgXCJjdXN0b20tc2VsZWN0XCI6ICovXG54ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImN1c3RvbS1zZWxlY3RcIik7XG5sID0geC5sZW5ndGg7XG5mb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gIHNlbEVsbW50ID0geFtpXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXTtcbiAgbGwgPSBzZWxFbG1udC5sZW5ndGg7XG4gIC8qIEZvciBlYWNoIGVsZW1lbnQsIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGFjdCBhcyB0aGUgc2VsZWN0ZWQgaXRlbTogKi9cbiAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gIGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3Qtc2VsZWN0ZWRcIik7XG4gIGEuaW5uZXJIVE1MID0gc2VsRWxtbnQub3B0aW9uc1tzZWxFbG1udC5zZWxlY3RlZEluZGV4XS5pbm5lckhUTUw7XG4gIHhbaV0uYXBwZW5kQ2hpbGQoYSk7XG4gIC8qIEZvciBlYWNoIGVsZW1lbnQsIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIG9wdGlvbiBsaXN0OiAqL1xuICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgYi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC1pdGVtcyBzZWxlY3QtaGlkZVwiKTtcbiAgZm9yIChqID0gMTsgaiA8IGxsOyBqKyspIHtcbiAgICAvKiBGb3IgZWFjaCBvcHRpb24gaW4gdGhlIG9yaWdpbmFsIHNlbGVjdCBlbGVtZW50LFxuICAgIGNyZWF0ZSBhIG5ldyBESVYgdGhhdCB3aWxsIGFjdCBhcyBhbiBvcHRpb24gaXRlbTogKi9cbiAgICBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcbiAgICBjLmlubmVySFRNTCA9IHNlbEVsbW50Lm9wdGlvbnNbal0uaW5uZXJIVE1MO1xuICAgIGMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLyogV2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQsIHVwZGF0ZSB0aGUgb3JpZ2luYWwgc2VsZWN0IGJveCxcbiAgICAgICAgYW5kIHRoZSBzZWxlY3RlZCBpdGVtOiAqL1xuICAgICAgICB2YXIgeSwgaSwgaywgcywgaCwgc2wsIHlsO1xuICAgICAgICBzID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XG4gICAgICAgIHNsID0gcy5sZW5ndGg7XG4gICAgICAgIGggPSB0aGlzLnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2w7IGkrKykge1xuICAgICAgICAgIGlmIChzLm9wdGlvbnNbaV0uaW5uZXJIVE1MID09IHRoaXMuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICBzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgaC5pbm5lckhUTUwgPSB0aGlzLmlubmVySFRNTDtcbiAgICAgICAgICAgIHkgPSB0aGlzLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNhbWUtYXMtc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB5bCA9IHkubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHlsOyBrKyspIHtcbiAgICAgICAgICAgICAgeVtrXS5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzYW1lLWFzLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGguY2xpY2soKTtcbiAgICB9KTtcbiAgICBiLmFwcGVuZENoaWxkKGMpO1xuICB9XG4gIHhbaV0uYXBwZW5kQ2hpbGQoYik7XG4gIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAvKiBXaGVuIHRoZSBzZWxlY3QgYm94IGlzIGNsaWNrZWQsIGNsb3NlIGFueSBvdGhlciBzZWxlY3QgYm94ZXMsXG4gICAgYW5kIG9wZW4vY2xvc2UgdGhlIGN1cnJlbnQgc2VsZWN0IGJveDogKi9cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlQWxsU2VsZWN0KHRoaXMpO1xuICAgIHRoaXMubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdC1oaWRlXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdC1hcnJvdy1hY3RpdmVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUFsbFNlbGVjdChlbG1udCkge1xuICAvKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBjbG9zZSBhbGwgc2VsZWN0IGJveGVzIGluIHRoZSBkb2N1bWVudCxcbiAgZXhjZXB0IHRoZSBjdXJyZW50IHNlbGVjdCBib3g6ICovXG4gIHZhciB4LCB5LCBpLCB4bCwgeWwsIGFyck5vID0gW107XG4gIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0LWl0ZW1zXCIpO1xuICB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdC1zZWxlY3RlZFwiKTtcbiAgeGwgPSB4Lmxlbmd0aDtcbiAgeWwgPSB5Lmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IHlsOyBpKyspIHtcbiAgICBpZiAoZWxtbnQgPT0geVtpXSkge1xuICAgICAgYXJyTm8ucHVzaChpKVxuICAgIH0gZWxzZSB7XG4gICAgICB5W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3QtYXJyb3ctYWN0aXZlXCIpO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgeGw7IGkrKykge1xuICAgIGlmIChhcnJOby5pbmRleE9mKGkpKSB7XG4gICAgICB4W2ldLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtaGlkZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLyogSWYgdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgdGhlIHNlbGVjdCBib3gsXG50aGVuIGNsb3NlIGFsbCBzZWxlY3QgYm94ZXM6ICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VBbGxTZWxlY3QpOyJdLCJmaWxlIjoiY3VzdG9tLXNlbGVjdC5qcyJ9
