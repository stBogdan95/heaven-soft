import 'dart:html' as html;

void main(List<String> args) {
  html.window.addEventListener(
    'scroll',
    (event) {
      final html.Element? upButton = html.querySelector('.upButton');
      if (upButton != null) {
        upButton.addEventListener(
          'click',
          (event) {
            html.window.scrollTo(0, 0, {'behavior': 'smooth'});
          },
        );
        if (html.window.pageYOffset > 100) {
          upButton.classes.add('show');
        } else {
          upButton.classes.remove('show');
        }
      }
    },
  );

  scrollToTag('whatWeDo');
  scrollToTag('implementedProjects');
}

void scrollToTag(String TagName) {
  final html.Element? whatWeDoLink = html.querySelector('#$TagName');
  if (whatWeDoLink != null) {
    whatWeDoLink.addEventListener(
      'click',
      (event) {
        final html.Element? whatWeDo = html.querySelector('.$TagName');
        if (whatWeDo != null) {
          whatWeDo.scrollIntoView(html.ScrollAlignment.TOP);
        }
      },
    );
  }
}
