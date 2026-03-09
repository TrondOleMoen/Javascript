// 1. Initializer - This is where we set up our loop variable. It usually involves declaring a variable and assigning it an initial value. This variable will be used to control the loop's execution.
let i = 0;

// 2. Condition - This is the expression that is evaluated before each iteration of the loop. If the condition evaluates to true, the loop body will execute. If it evaluates to false, the loop will terminate.
while (i < 5) {
  console.log("Iteration:", i);

  // 3. ( UPDATER INSIDE THE LOOP ) Increment/Decrement - This is where we update the loop variable to eventually meet the termination condition. In a while loop, this is typically done within the loop body. For example, we might increment the variable by 1 in each iteration.
  i++;
}
