import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

export default function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Sergey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Alesya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Milana</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Timosha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Arina</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Who are you?</div>
      </div>
    </div>
  );
}
