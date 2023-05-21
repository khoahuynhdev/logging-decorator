
import loggingDecorator from "./logDecorator";

class Task {
  @loggingDecorator
  public execute() {
    console.log('execute task');
    setTimeout(() => {
      console.log('execute task success');

    }, 2000)
  }

  @loggingDecorator
  public executeError() {
    console.log('execute task');
    throw new Error('task failed')
  }
}

const task = new Task();

// task.execute();
task.executeError();
