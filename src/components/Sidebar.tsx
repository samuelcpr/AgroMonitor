import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, AlignBottomSimple, AlignBottom, Pencil, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom';
import Agro from '../assets/Indústrias timmerman logo.svg'

import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={Agro} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <AlignBottom weight="fill" />
          <span>Criar observações</span>
        </NavLink>
        <a href="">
          <AlignBottomSimple />
          <span>Tipos de praga</span>
        </a>
        <a href="">
          <Bell />
          <span>Alertas</span>
        </a>
        <a href="">
          <Envelope />
          <span>Soluções aplicadas</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Documentação</span>
        </a>
        <a href="">
          <FileText />
          <span>Relatório do solo</span>
        </a>
        <a href="">
          <User />
          <span>Usuarios</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>Relatórios do sistema</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Login</span>
      </button>
    </aside>
  )
}