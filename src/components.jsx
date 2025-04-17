import { colour_mix } from './functions.js';

function Question1() {
    return (
        <section>
            <h1>1. Colour Mix</h1>
            <h2>Results</h2>
            <p>colour_mix("red", "blue") = {colour_mix("red", "blue")}</p>
            <p>colour_mix("green", "blue") = {colour_mix("green", "blue")}</p>
            <p>colour_mix("red", "green") = {colour_mix("red", "green")}</p>
            <p>colour_mix("blue", "blue") = {colour_mix("blue", "blue")}</p>
            <p>colour_mix("red", "red") = {colour_mix("red", "red")}</p>
            <p>colour_mix("green", "green") = {colour_mix("green", "green")}</p>
            <p>colour_mix("yellow", "red") = {colour_mix("yellow", "red")}</p>
        </section>
    );
}

export { Question1 };

import { largest_product } from './functions.js';

function Question2() {
    return (
        <section>
            <h1>2. Largest Product</h1>
            <h2>Results</h2>
            <p>largest_product(-8, 12, 20) = {largest_product(-8, 12, 20)}</p> {/* Expected: 240 */}
            <p>largest_product(5, 9, 2) = {largest_product(5, 9, 2)}</p>       {/* Expected: 45 */}
            <p>largest_product(0, -10, -5) = {largest_product(0, -10, -5)}</p> {/* Expected: 0 */}
        </section>
    );
}

export { Question2 };


import { day_of_the_week } from './functions.js';

function Question3() {
    return (
        <section>
            <h1>3. Day of the Week</h1>
            <h2>Results</h2>
            <p>day_of_the_week(1) = {day_of_the_week(1)}</p>   {/* Sunday */}
            <p>day_of_the_week(4) = {day_of_the_week(4)}</p>   {/* Wednesday */}
            <p>day_of_the_week(7) = {day_of_the_week(7)}</p>   {/* Saturday */}
            <p>day_of_the_week(0) = {day_of_the_week(0)}</p>   {/* Error */}
            <p>day_of_the_week(8) = {day_of_the_week(8)}</p>   {/* Error */}
        </section>
    );
}

export { Question3 };

import { pay_raise } from './functions.js';

function Question4() {
    return (
        <section>
            <h1>4. Pay Raise</h1>
            <h2>Results</h2>
            <p>pay_raise("F", 2, 25000) = {pay_raise("F", 2, 25000)}</p>      {/* 25375.00 */}
            <p>pay_raise("F", 12, 40000) = {pay_raise("F", 12, 40000)}</p>    {/* 42000.00 */}
            <p>pay_raise("P", 11, 30000) = {pay_raise("P", 11, 30000)}</p>    {/* 30600.00 */}
            <p>pay_raise("P", 3, 20000) = {pay_raise("P", 3, 20000)}</p>      {/* 20400.00 */}
            <p>pay_raise("P", 2, 18000) = {pay_raise("P", 2, 18000)}</p>      {/* 18180.00 */}
            <p>pay_raise("X", 5, 50000) = {pay_raise("X", 5, 50000)}</p>      {/* Error */}
        </section>
    );
}

export { Question4 };

import { is_leap } from './functions.js';

function Question5() {
    return (
        <section>
            <h1>5. Leap Year</h1>
            <h2>Results</h2>
            <p>is_leap(1999) = {String(is_leap(1999))}</p>     {/* false */}
            <p>is_leap(2000) = {String(is_leap(2000))}</p>     {/* true */}
            <p>is_leap(1900) = {String(is_leap(1900))}</p>     {/* false */}
            <p>is_leap(2024) = {String(is_leap(2024))}</p>     {/* true */}
            <p>is_leap(-100) = {String(is_leap(-100))}</p>     {/* Error */}
            <p>is_leap("year") = {String(is_leap("year"))}</p> {/* Error */}
        </section>
    );
}

export { Question5 };
