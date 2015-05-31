/*
  This the solution of the same problem using arithmetic progressions.
  S = (n / 2) * (a + (n-1) * d)
  where
    a is the first term,
    d is the common difference,
    n is the number of terms in the series
    For a limit x, n can be derived as
      n = int((x - a) / d)) + 1
*/
// This solution relies on the fact that, sum of multiples of 3 would be a series with
// a = 3, d = 3, and n = (limit - a / d) + 1

/**
* returns value of n for our problem statement that always requires sum of
* natural numbers less than a given limit x.
*/
function get_n(a, d, x) {
  return parseInt(((x - a) / d) + 1);
}

function get_last_term(a, d, x) {
  var n;
  n = get_n(a, d, x);

  return (a + (n - 1) * d);
}

function sum_of_series(a, d, x) {
  var n, l, sum;

  n = get_n(a, d, x);
  l = get_last_term(a, d, x);

  sum = (n/2) * (a + l);

  return sum;
}

// And now for the solution of the Project Euler's first problem..
// sum for 3 and 5 upto 1000, not including 1000;
// Using our simple API written above
function solution(limit) {
  var s1, s2, s3, n, final_sum;
  n = limit - 1;
  final_sum = 0;

  s1 = sum_of_series(3, 3, n);
  s2 = sum_of_series(5, 5, n);
  s3 = sum_of_series(15, 15, n);

  final_sum = s1 + s2 - s3;

  return final_sum;
}
