/* eslint-disable max-len */
import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import './page-test2';
import './page-test2-header';
import './page-test2-header-tools';
import './page-test2-header-brand';
import './page-test2-header-brand-link';
import './page-test2-header-brand-toggle';

const createProps = () => ({
  onClick: action('click'),
  additionalClasses: text('Additional classes', ''),
});

storiesOf('Page-test2 (!shadow)', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const { additionalClasses } = createProps();
    return html`
      <section style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">Page</h1>
        <br />
        <pf-page-test2 class=${additionalClasses}>
          <pf-page-test2-header>
            <pf-page-test2-header-brand>
              <pf-page-test2-header-brand-link>
                <img
                  class="pf-c-brand"
                  src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMjUgMzUiIHZpZXdCb3g9IjAgMCAyMjUgMzUiIHdpZHRoPSIyMjUiIGhlaWdodD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNy40Nzk5IiB4Mj0iMTcuNDc5OSIgeTE9IjIuMDM2OSIgeTI9IjM0LjExMTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZjFmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNzZjMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTEyLjMgMjYuNy01LjIgMS4yLTctOS45IDE3LTE2LjYuNC0uNC40LjQgMTcgMTYuNi03IDkuOS01LjItMS4yLTUuMiA3LjN6bTUuMiA1LjYgNC4yLTUuOC0xLjMtLjMtMi44IDQuMS0zLTQuMS0xLjMuM3ptLjEtMy44IDItMy0yLjEtMjAuMy0yLjEgMjAuM3ptOS44LTEuOCA2LjEtOC42LTEwLjMtMTAuMSA1LjUgNi43LTMuMSA0LjMgMSAyLjMtMy4yIDQuNXptLTE5LjkgMCA0LjEtLjktMy4yLTQuNSAxLTIuMy0zLjEtNC4zIDUuNC02LjctMTAuMyAxMC4xem01LjItMS4yIDEuMy0uMy0zLjktNS4zLS41IDEuMnptOS42IDAgMy4xLTQuNC0uNS0xLjItMy45IDUuM3ptLTEuOC0xLjQgMy45LTUuMy01LjgtMTMuMnptLTYuMSAwIDItMTguNS01LjggMTMuM3ptLTQuNS02LjIgNS44LTEzLjEtOC4xIDkuOXptMTUuMiAwIDIuMy0zLjItOC4xLTkuOXoiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNTAuOCAyNHYtMTIuMWg1LjJjLjggMCAxLjQuMSAxLjkuM3MuOS41IDEuMy45Yy4zLjQuNi44LjcgMS4yLjEuNS4yLjkuMiAxLjQgMCAuMyAwIC42LS4xLjlzLS4yLjYtLjMuOS0uMy41LS41LjhjLS4yLjItLjUuNS0uOC43cy0uNy4zLTEuMS40LS44LjItMS4zLjJoLTIuOXY0LjR6bTUuMy02LjdjLjMgMCAuNSAwIC44LS4xLjItLjEuNC0uMi41LS40cy4yLS4zLjMtLjUuMS0uNC4xLS42IDAtLjQtLjEtLjVjMC0uMi0uMS0uNC0uMy0uNS0uMS0uMi0uMy0uMy0uNS0uNHMtLjUtLjItLjgtLjJoLTN2My4yeiIvPjxwYXRoIGQ9Im03Ni4yIDI0LS45LTIuNWgtNC43bC0uOSAyLjVoLTIuNWw0LjYtMTIuMWgyLjNsNC42IDEyLjF6bS0yLjktNy44Yy0uMS0uMS0uMS0uMy0uMi0uNXMtLjEtLjQtLjItLjZjMCAuMi0uMS40LS4yLjZzLS4xLjQtLjIuNWwtMS4yIDMuMWgzLjJ6Ii8+PHBhdGggZD0ibTkxLjkgMTQuMnY5LjhoLTIuM3YtOS44aC0zLjV2LTIuM2g5LjN2Mi4zeiIvPjxwYXRoIGQ9Im0xMTAgMTQuMnY5LjhoLTIuM3YtOS44aC0zLjV2LTIuM2g5LjN2Mi4zeiIvPjxwYXRoIGQ9Im0xMjMuMSAyNHYtMTIuMWg4LjN2Mi4yaC01Ljl2Mi41aDMuNXYyLjJoLTMuNXYyLjloNi4zdjIuM3oiLz48cGF0aCBkPSJtMTQxLjUgMjR2LTEyLjFoNS42Yy44IDAgMS40LjEgMS45LjNzLjkuNSAxLjIuOC41LjguNyAxLjJjLjEuNS4yLjkuMiAxLjQgMCAuMy0uMS43LS4xIDEtLjEuNC0uMi43LS40IDFzLS40LjYtLjcuOS0uNi41LTEgLjZsMi4zIDQuOGgtMi42bC0yLjMtNC41aC0yLjR2NC42em01LjctNi43Yy4zIDAgLjUgMCAuOC0uMS4yLS4xLjQtLjIuNS0uNC4xLS4xLjItLjMuMy0uNXMuMS0uNC4xLS42IDAtLjQtLjEtLjZjMC0uMi0uMS0uNC0uMi0uNXMtLjMtLjMtLjUtLjQtLjUtLjEtLjgtLjFoLTMuM3YzLjJ6Ii8+PHBhdGggZD0ibTE2OC44IDI0LTQuOC03LjFjLS4xLS4xLS4yLS4zLS4zLS40LS4xLS4yLS4yLS4zLS4yLS41di41LjUgN2gtMi4zdi0xMi4xaDIuMmw0LjcgN2MuMS4xLjIuMy4zLjQuMS4yLjIuMy4zLjUgMC0uMiAwLS4zIDAtLjVzMC0uMyAwLS40di03aDIuM3YxMi4xeiIvPjxwYXRoIGQ9Im0xODEuMyAyNHYtMTIuMWg4LjF2Mi4yaC01Ljh2Mi41aDMuN3YyLjJoLTMuN3Y1LjJ6Ii8+PHBhdGggZD0ibTE5OC44IDI0di0xMi4xaDIuM3Y5LjloNS44djIuMnoiLz48cGF0aCBkPSJtMjE4LjIgMjR2LTQuN2wtNC41LTcuNGgyLjZsMyA0LjkgMy00LjloMi43bC00LjUgNy40djQuN3oiLz48L2c+PC9zdmc+Cg=="
                  alt="Patternfly Logo"
                />
              </pf-page-test2-header-brand-link>
            </pf-page-test2-header-brand>
            <pf-page-test2-header-tools>
              <div class="pf-c-page__header-tools-group pf-m-icons">
                <button class="pf-c-button pf-m-plain" type="button" aria-label="Alerts">
                  <svg
                    style="vertical-align:-0.125em"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                      transform=""
                    ></path>
                  </svg>
                </button>
                <button class="pf-c-button pf-m-plain" type="button" aria-label="Settings">
                  <svg
                    style="vertical-align:-0.125em"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                      transform=""
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="pf-c-page__header-tools-group">
                <div class="pf-c-dropdown">
                  <button
                    class="pf-c-dropdown__toggle pf-m-mobile pf-m-plain"
                    id="page-layout-horizontal-nav-dropdown-kebab-right-aligned-1-button"
                    aria-expanded="false"
                    aria-label="Actions"
                  >
                    <svg
                      style="vertical-align:-0.125em"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      viewBox="0 0 192 512"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                        transform=""
                      ></path>
                    </svg>
                  </button>
                  <ul
                    class="pf-c-dropdown__menu pf-m-align-right"
                    aria-labelledby="page-layout-horizontal-nav-dropdown-kebab-right-aligned-1-button"
                    hidden
                  >
                    <li>
                      <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                    </li>
                    <li>
                      <button class="pf-c-dropdown__menu-item">Action</button>
                    </li>
                    <li>
                      <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1"
                        >Disabled link</a
                      >
                    </li>
                    <li>
                      <button class="pf-c-dropdown__menu-item" disabled>Disabled action</button>
                    </li>
                    <li class="pf-c-dropdown__separator" role="separator"></li>
                    <li>
                      <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
                <div class="pf-m-user">
                  <div class="pf-c-dropdown">
                    <button
                      class="pf-c-dropdown__toggle pf-m-plain"
                      id="page-layout-horizontal-nav-dropdown-button"
                      aria-expanded="false"
                    >
                      <span class="pf-c-dropdown__toggle-text">John Smith</span>
                      <svg
                        style="vertical-align:-0.125em"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        viewBox="0 0 320 512"
                        aria-hidden="true"
                        role="img"
                        class="pf-c-dropdown__toggle-icon"
                      >
                        <path
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          transform=""
                        ></path>
                      </svg>
                    </button>
                    <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
                  </div>
                </div>
              </div>
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPgo="
                alt="Avatar image"
                class="pf-c-avatar"
              />
            </pf-page-test2-header-tools>
          </pf-page-test2-header>
        </pf-page-test2>
      </section>
    `;
  });
