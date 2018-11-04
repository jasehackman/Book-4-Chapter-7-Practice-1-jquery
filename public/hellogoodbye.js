(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  // Use jQuery to get a reference to `load-songs`
  $("#load-songs").click(() => {
    $("#song-list").text(null);
    return fetch("http://localhost:8088/songs").then(data => data.json()).then(songList => {
      songList.forEach(song => {
        let songBuilder = `<section class="song">
         <h1 class="song__title">${song.title}</h1>
        <section class="song__description">
            Performed by ${song.artist} on the album ${song.album}
         </section>
       </section>`;
        $("#song-list").append(songBuilder);
      });
    });
  }); // Use jQuery to get a reference to `song-list`

  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */

  /*
      Chain a `.then()` method to the ajax call, and when
      it is complete build a DOM component for each song with
      the following structure. Use the jQuery append() method
      to put an HTML representation of each song the DOM as a
      child component of the .
            <section class="song">
              <h1 class="song__title">{Title of song}</h1>
              <section class="song__description">
                  Performed by {artist} on the album {album}
              </section>
          </section>
  */
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQVc7QUFFM0I7QUFDQSxFQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsS0FBakIsQ0FBdUIsTUFBTTtBQUMzQixJQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckI7QUFDQSxXQUFPLEtBQUssQ0FBQyw2QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELElBQUksSUFBSSxJQUFJLENBQUMsSUFBTCxFQURQLEVBRU4sSUFGTSxDQUVELFFBQVEsSUFBSTtBQUNoQixNQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLElBQUksSUFBSTtBQUN4QixZQUFJLFdBQVcsR0FDZDttQ0FDMkIsSUFBSSxDQUFDLEtBQU07OzJCQUVuQixJQUFJLENBQUMsTUFBTyxpQkFBZ0IsSUFBSSxDQUFDLEtBQU07O2tCQUozRDtBQU9BLFFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixNQUFoQixDQUF1QixXQUF2QjtBQUNBLE9BVEQ7QUFVRCxLQWJNLENBQVA7QUFjRCxHQWhCRCxFQUgyQixDQW9CM0I7O0FBR0E7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBY0QsQ0E1Q0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgLy8gVXNlIGpRdWVyeSB0byBnZXQgYSByZWZlcmVuY2UgdG8gYGxvYWQtc29uZ3NgXHJcbiAgJChcIiNsb2FkLXNvbmdzXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICQoXCIjc29uZy1saXN0XCIpLnRleHQobnVsbClcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9zb25nc1wiKVxyXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgIC50aGVuKHNvbmdMaXN0ID0+IHtcclxuICAgICAgc29uZ0xpc3QuZm9yRWFjaChzb25nID0+IHtcclxuICAgICAgIGxldCBzb25nQnVpbGRlciA9IFxyXG4gICAgICAgYDxzZWN0aW9uIGNsYXNzPVwic29uZ1wiPlxyXG4gICAgICAgICA8aDEgY2xhc3M9XCJzb25nX190aXRsZVwiPiR7c29uZy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic29uZ19fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgUGVyZm9ybWVkIGJ5ICR7c29uZy5hcnRpc3R9IG9uIHRoZSBhbGJ1bSAke3NvbmcuYWxidW19XHJcbiAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgIDwvc2VjdGlvbj5gXHJcbiAgICAgICAkKFwiI3NvbmctbGlzdFwiKS5hcHBlbmQoc29uZ0J1aWxkZXIpXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9KVxyXG4gIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIGBzb25nLWxpc3RgXHJcbiBcclxuXHJcbiAgLypcclxuICAgICAgQXR0YWNoIGEgY2xpY2sgaGFuZGxlciB0byB0aGUgYnV0dG9uIHdpdGggalF1ZXJ5LiBXaGVuXHJcbiAgICAgIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgdXNlICQuYWpheCgpIHRvIGxvYWQgYHNvbmdzLmpzb25gXHJcbiAgICAgIGZyb20gdGhlIGZpbGUgc3lzdGVtXHJcbiAgKi9cclxuXHJcblxyXG4gIC8qXHJcbiAgICAgIENoYWluIGEgYC50aGVuKClgIG1ldGhvZCB0byB0aGUgYWpheCBjYWxsLCBhbmQgd2hlblxyXG4gICAgICBpdCBpcyBjb21wbGV0ZSBidWlsZCBhIERPTSBjb21wb25lbnQgZm9yIGVhY2ggc29uZyB3aXRoXHJcbiAgICAgIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlLiBVc2UgdGhlIGpRdWVyeSBhcHBlbmQoKSBtZXRob2RcclxuICAgICAgdG8gcHV0IGFuIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBzb25nIHRoZSBET00gYXMgYVxyXG4gICAgICBjaGlsZCBjb21wb25lbnQgb2YgdGhlIC5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNvbmdcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzb25nX190aXRsZVwiPntUaXRsZSBvZiBzb25nfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzb25nX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICBQZXJmb3JtZWQgYnkge2FydGlzdH0gb24gdGhlIGFsYnVtIHthbGJ1bX1cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgKi9cclxufSkiXX0=
