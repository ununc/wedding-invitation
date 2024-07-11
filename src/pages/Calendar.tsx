import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import { Flower } from '../components/Flower';

export const Calendar = () => {
  const date = new Date().getTime();
  const wedding = new Date('2024-10-09').getTime();
  const d = (wedding - date) / 1000 / 60 / 60 / 24;
  return (
    <Section>
      <AppearObserver>
        <div className="w-full mt-20 mb-1.5 opacity-[0.55]">
          <Flower />
        </div>
      </AppearObserver>
      <AppearObserver>
        <h2 className="text-sm text-amber-950 tracking-tighter opacity-40 text-center">
          C A L E N D A R
        </h2>
      </AppearObserver>

      <AppearObserver>
        <div className="mt-8 text-center text-15 text-neutral-700 opacity-75">
          <div className="mt-2 text-sm">
            <div className="wrapper">
              <header>
                <div className="nav">
                  <button className="material-icons"> chevron_left </button>
                  <p className="current-date">September 2022</p>
                  <button className="material-icons"> chevron_right </button>
                </div>
              </header>
              <div className="calendar">
                <ul className="weeks">
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul className="days">
                  <li className="inactive">27</li>
                  <li className="inactive">28</li>
                  <li className="inactive">29</li>
                  <li className="inactive">30</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm">2024. 10. 09</div>
          <div className="mt-2 text-sm">한글날 낮 12:00</div>
          <div>D-Day {Math.ceil(d)}</div>
        </div>
      </AppearObserver>

      <div className="h-5"></div>
    </Section>
  );
};
