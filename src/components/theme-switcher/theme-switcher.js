import './theme-switcher.scss';

class ThemeSwitcher {
  constructor() {
    this.checkbox = document.querySelector('.js-theme-switcher__control');

    this._getTheme();
  }

  init() {
    this.checkbox.addEventListener('change', () => {
      this._switchTheme();
    });
  }

  _switchTheme() {
    const isDark = this.checkbox.checked;

    const theme = isDark ? 'dark' : 'light';

    this._setTheme(theme);
    this._saveTheme(theme);
  }

  _setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  _saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  _getTheme() {
    try {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        this._setTheme(savedTheme);

        if (savedTheme === 'dark') {
          this.checkbox.checked = true;
        }
      } else {
        this._getPreferredColorScheme();
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem('theme');
    }
  }

  _getPreferredColorScheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
      this.checkbox.checked = true;
      this._setTheme('dark');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher().init();
});
