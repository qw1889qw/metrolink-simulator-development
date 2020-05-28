import {
  cbRadio,
  promiseRadio,
  asyncRadio,
  startButton,
  createInnerMessageDiv,
  addMessage
} from './dom';

const stations = require('../assets/stations.json');

const rtToSim = mins => (mins * 1000 * 60) / 360; // change back to dividing by 120 later
/* const failChanceForAll = 0.25; */

const breakDown = () => {
  addMessage("sorry, but we're currently experiencing difficulties. please wait, we'll be moving again shortly"); // eslint-disable-line
};

// callback hell

const reachOceanside = cb => {
  addMessage(`the train has reached ${stations[0].name}.`);
  cb(rtToSim(stations[1].minutes));
};

const reachSanClemente = (mins, cb) => {
  setTimeout(() => {
    // change to 0.25 later
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[1].name}.`);
        cb(rtToSim(stations[2].minutes));
      }, 1000); // change to 10000 later
    } else {
      addMessage(`the train has reached ${stations[1].name}.`);
      cb(rtToSim(stations[2].minutes));
    }
  }, mins);
};

const reachSJC = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[2].name}.`);
        cb(rtToSim(stations[3].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[2].name}.`);
      cb(rtToSim(stations[3].minutes));
    }
  }, mins);
};

const reachLagunaNiguel = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[3].name}.`);
        cb(rtToSim(stations[4].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[3].name}.`);
      cb(rtToSim(stations[4].minutes));
    }
  }, mins);
};

const reachIrvine = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[4].name}.`);
        cb(rtToSim(stations[5].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[4].name}.`);
      cb(rtToSim(stations[5].minutes));
    }
  }, mins);
};

const reachTustin = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[5].name}.`);
        cb(rtToSim(stations[6].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[5].name}.`);
      cb(rtToSim(stations[6].minutes));
    }
  }, mins);
};

const reachSantaAna = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[6].name}.`);
        cb(rtToSim(stations[7].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[6].name}.`);
      cb(rtToSim(stations[7].minutes));
    }
  }, mins);
};

const reachOrange = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[7].name}.`);
        cb(rtToSim(stations[8].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[7].name}.`);
      cb(rtToSim(stations[8].minutes));
    }
  }, mins);
};

const reachAnaheim = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[8].name}.`);
        cb(rtToSim(stations[9].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[8].name}.`);
      cb(rtToSim(stations[9].minutes));
    }
  }, mins);
};

const reachFullerton = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[9].name}.`);
        cb(rtToSim(stations[10].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[9].name}.`);
      cb(rtToSim(stations[10].minutes));
    }
  }, mins);
};

const reachBuenaPark = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[10].name}.`);
        cb(rtToSim(stations[11].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[10].name}.`);
      cb(rtToSim(stations[11].minutes));
    }
  }, mins);
};

const reachNorwalk = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[11].name}.`);
        cb(rtToSim(stations[12].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[11].name}.`);
      cb(rtToSim(stations[12].minutes));
    }
  }, mins);
};

const reachCommerce = (mins, cb) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(`the train has reached ${stations[12].name}.`);
        cb(rtToSim(stations[13].minutes));
      }, 1000);
    } else {
      addMessage(`the train has reached ${stations[12].name}.`);
      cb(rtToSim(stations[13].minutes));
    }
  }, mins);
};

const reachLA = mins => {
  setTimeout(() => {
    if (Math.random() < 1) {
      breakDown();
      setTimeout(() => {
        addMessage(
          `the train has reached ${stations[13].name}. thanks for riding with us today, and we hope to see you again soon!`
        );
      }, 1000);
    } else {
      addMessage(
        `the train has reached ${stations[13].name}. thanks for riding with us today, and we hope to see you again soon!`
      );
    }
  }, mins);
};

const takeTrainCallbacks = () => {
  reachOceanside(time1 => {
    reachSanClemente(time1, time2 => {
      reachSJC(time2, time3 => {
        reachLagunaNiguel(time3, time4 => {
          reachIrvine(time4, time5 => {
            reachTustin(time5, time6 => {
              reachSantaAna(time6, time7 => {
                reachOrange(time7, time8 => {
                  reachAnaheim(time8, time9 => {
                    reachFullerton(time9, time10 => {
                      reachBuenaPark(time10, time11 => {
                        reachNorwalk(time11, time12 => {
                          reachCommerce(time12, time13 => reachLA(time13));
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
/* takeTrainCallbacks(); */

// Promises

const reachOceansidePromise = () => {
  return new Promise(resolve => {
    addMessage(`the train has reached ${stations[0].name}.`);
    resolve(rtToSim(stations[1].minutes));
  });
};

const reachStationPromise = (failChance, station, minsCurrent, minsNext) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() < failChance) {
        breakDown();
        setTimeout(() => {
          addMessage(`the train has reached ${station}.`);
          resolve(rtToSim(minsNext));
        }, 1000);
      } else {
        resolve(rtToSim(minsNext));
      }
    }, minsCurrent);
  });
};

const reachLAPromise = mins => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() < 1) {
        breakDown();
        setTimeout(() => {
          resolve(
            `the train has reached ${stations[13].name}. thanks for riding with us today, and we hope to see you again soon!`
          );
        }, 1000);
      } else {
        resolve(
          `the train has reached ${stations[13].name}. thanks for riding with us today, and we hope to see you again soon!`
        );
      }
    }, mins);
  });
};

const takeTrainPromises = () => {
  reachOceansidePromise()
    .then(time => {
      return reachStationPromise(
        1,
        stations[1].name,
        time,
        stations[2].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[2].name,
        time,
        stations[3].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[3].name,
        time,
        stations[4].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[4].name,
        time,
        stations[5].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[5].name,
        time,
        stations[6].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[6].name,
        time,
        stations[7].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[7].name,
        time,
        stations[8].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[8].name,
        time,
        stations[9].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[9].name,
        time,
        stations[10].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[10].name,
        time,
        stations[11].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[11].name,
        time,
        stations[12].minutes
      );
    })
    .then(time => {
      return reachStationPromise(
        1,
        stations[12].name,
        time,
        stations[13].minutes
      );
    })
    .then(reachLAPromise)
    .then(addMessage);
};
/* takeTrainPromises(); */

// async/await

const takeTrainAsync = async () => {
  const timeAfterStation1 = await reachOceansidePromise();
  const timeAfterStation2 = await reachStationPromise(
    1,
    stations[1].name,
    timeAfterStation1,
    stations[2].minutes
  );
  const timeAfterStation3 = await reachStationPromise(
    1,
    stations[2].name,
    timeAfterStation2,
    stations[3].minutes
  );
  const timeAfterStation4 = await reachStationPromise(
    1,
    stations[3].name,
    timeAfterStation3,
    stations[4].minutes
  );
  const timeAfterStation5 = await reachStationPromise(
    1,
    stations[4].name,
    timeAfterStation4,
    stations[5].minutes
  );
  const timeAfterStation6 = await reachStationPromise(
    1,
    stations[5].name,
    timeAfterStation5,
    stations[6].minutes
  );
  const timeAfterStation7 = await reachStationPromise(
    1,
    stations[6].name,
    timeAfterStation6,
    stations[7].minutes
  );
  const timeAfterStation8 = await reachStationPromise(
    1,
    stations[7].name,
    timeAfterStation7,
    stations[8].minutes
  );
  const timeAfterStation9 = await reachStationPromise(
    1,
    stations[8].name,
    timeAfterStation8,
    stations[9].minutes
  );
  const timeAfterStation10 = await reachStationPromise(
    1,
    stations[9].name,
    timeAfterStation9,
    stations[10].minutes
  );
  const timeAfterStation11 = await reachStationPromise(
    1,
    stations[10].name,
    timeAfterStation10,
    stations[11].minutes
  );
  const timeAfterStation12 = await reachStationPromise(
    1,
    stations[11].name,
    timeAfterStation11,
    stations[12].minutes
  );
  const timeAfterStation13 = await reachStationPromise(
    1,
    stations[12].name,
    timeAfterStation12,
    stations[13].minutes
  );
  const lastMessage = await reachLAPromise(timeAfterStation13);
  addMessage(lastMessage);
};
/* takeTrainAsync(); */

const startRiding = () => {
  createInnerMessageDiv();
  if (cbRadio.checked) {
    takeTrainCallbacks();
  } else if (promiseRadio.checked) {
    takeTrainPromises();
  } else {
    takeTrainAsync();
  }
};

startButton.addEventListener('click', () => {
  if (cbRadio.checked || promiseRadio.checked || asyncRadio.checked) {
    startRiding();
    startButton.setAttribute('disabled', true);
  }
});
