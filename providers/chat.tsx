/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useReducer } from 'react';
import { Required } from 'utility-types';
import { wait } from '../utils/common';
import { getRandomInt } from '../utils/math';

type Props = Required<React.Props<unknown>, 'children'>;

export type TabKey = '/home' | '/about' | '/skill' | '/work' | '/contact';

interface Message {
  avatar: string;
  name: string;
  message: string;
}

type MessagePart = Pick<Message, 'avatar' | 'name'>;

interface NewMessage extends Message {
  date: Date;
}

interface GroupMessage {
  avatar: string;
  name: string;
  date: Date;
  messages: string[];
}

interface State {
  messages: GroupMessage[];
}

type Func<A> = (dispatch: React.Dispatch<A>) => void | Promise<void>;

const animals = [
  'Alligator',
  'Anteater',
  'Armadillo',
  'Auroch',
  'Axolotl',
  'Badger',
  'Bat',
  'Beaver',
  'Buffalo',
  'Camel',
  'Capybara',
  'Chameleon',
  'Cheetah',
  'Chinchilla',
  'Chipmunk',
  'Chupacabra',
  'Cormorant',
  'Coyote',
  'Crow',
  'Dingo',
  'Dinosaur',
  'Dolphin',
  'Duck',
  'Elephant',
  'Ferret',
  'Fox',
  'Frog',
  'Giraffe',
  'Gopher',
  'Grizzly',
  'Hedgehog',
  'Hippo',
  'Hyena',
  'Ibex',
  'Ifrit',
  'Iguana',
  'Jackal',
  'Kangaroo',
  'Koala',
  'Kraken',
  'Lemur',
  'Leopard',
  'Liger',
  'Llama',
  'Manatee',
  'Mink',
  'Monkey',
  'Moose',
  'Narwhal',
  'Orangutan',
  'Otter',
  'Panda',
  'Penguin',
  'Platypus',
  'Pumpkin',
  'Python',
  'Quagga',
  'Rabbit',
  'Raccoon',
  'Rhino',
  'Sheep',
  'Shrew',
  'Skunk',
  'Squirrel',
  'Tiger',
  'Turtle',
  'Walrus',
  'Wolf',
  'Wolverine',
  'Wombat',
];

const myMessagePart: MessagePart = {
  avatar: 'https://avatars0.githubusercontent.com/u/10099001',
  name: 'Anakin Yuen',
};
const yourIndex = getRandomInt(0, animals.length - 1);
const yourMessagePart: MessagePart = {
  avatar: `/images/chat/${animals[yourIndex]}.png`,
  name: `Anonymous ${animals[yourIndex]}`,
};

const initalState: State = {
  messages: [
    {
      ...myMessagePart,
      date: new Date(),
      messages: ['hi👋'],
    },
  ],
};

export const YourMessageMap = {
  HOW_ARE_YOU: 'How are you?',
  WHO: 'Who are you?',
  WHAT: 'What is this website about?',
  FULL_NAME: 'What is your full name?',
  FROM: 'Where are you from?',
  UNIVERSITY: 'Where did you go to university?',
  STUDY: 'What major did you study?',
  WORK: 'What projects have you done?',
  SKILL: 'What skills do you possess?',
  CONTACT: 'How can I find you?',
  YOUTUBE: 'What is your favorite YouTube channel?',
};

const MyMessageMap: { [key: string]: string[] } = {
  HOW_ARE_YOU: ['Great😉', 'Not bad', 'Pretty good', 'Good, thanks😌'],
  WHO: [`Hi, I'm Anakin Yuen. I'm front-end developer from Hong Kong.`],
  WHAT: [
    'This is my portfolio website in which you can find the projects I did in the past few years.',
  ],
  FULL_NAME: ['YUEN KA LONG'],
  FROM: ['Hong Kong', '🇭🇰', 'Latitude: 22.316668, Longitude: 114.183334'],
  STUDY: ['BSc (Hons) in Internet & Multimedia Technologies'],
  UNIVERSITY: ['The Hong Kong Polytechnic University', 'PolyU'],
  WORK: ['👈Check out my projects in Work page'],
  SKILL: ['👈Check out my skills in Skill page'],
  CONTACT: ['👈You can find the answer in Contact Page'],
  YOUTUBE: [
    'Here is my top 3 favorite YouTube channels:\n- Linus Tech Tips\n- Google Chrome Developers (HTTP 203)\n- 啾啾鞋',
  ],
};

const ADD_MESSAGE = 'ADD_MESSAGE';

const addMessage = (message: Message) => {
  return {
    type: ADD_MESSAGE as typeof ADD_MESSAGE,
    payload: { ...message, date: new Date() } as NewMessage,
  };
};

export const ask = (key: string) => async (dispatch: React.Dispatch<Action>) => {
  dispatch(
    addMessage({
      ...yourMessagePart,
      message: YourMessageMap[key],
    }),
  );
  await wait(getRandomInt(500, 1500));
  const myMessageList = MyMessageMap[key];
  dispatch(
    addMessage({
      ...myMessagePart,
      message: myMessageList[getRandomInt(0, myMessageList.length - 1)],
    }),
  );
};

type Action = ReturnType<typeof addMessage>;

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const ChatContext = React.createContext({} as Context);

const isInSameTime = (date1: Date, date2: Date) => {
  if (date1.getMinutes() !== date2.getMinutes()) {
    return false;
  }
  if (date1.getHours() !== date2.getHours()) {
    return false;
  }
  if (date1.getDate() !== date2.getDate()) {
    return false;
  }
  if (date1.getMonth() !== date2.getMonth()) {
    return false;
  }
  return true;
};

const transformNewMessageToGroupMessage = ({ message, ...remain }: NewMessage): GroupMessage => {
  return {
    ...remain,
    messages: [message],
  };
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = action.payload;
      const lastMessage = state.messages.slice(-1)[0];
      if (
        lastMessage &&
        lastMessage.name === newMessage.name &&
        isInSameTime(lastMessage.date, newMessage.date)
      ) {
        return {
          messages: state.messages.slice(0, -1).concat({
            ...lastMessage,
            messages: lastMessage.messages.concat(newMessage.message),
          }),
        };
      }
      return { messages: [...state.messages, transformNewMessageToGroupMessage(newMessage)] };
    default:
      return state;
  }
};

const isFunction = function <A>(x: A | Func<A>): x is Func<A> {
  return typeof x === 'function';
};

export const thunk = function <A>(dispatch: React.Dispatch<A>) {
  return (value: A | Func<A>) => {
    if (isFunction(value)) {
      value(dispatch);
      return;
    }
    dispatch(value);
  };
};

const Provider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return <ChatContext.Provider value={{ state, dispatch }}>{children}</ChatContext.Provider>;
};

export default Provider;
