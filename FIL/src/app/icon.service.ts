import { Injectable } from '@angular/core';
import {faBars,faEllipsisV, faSignOutAlt,faHome,faUser, faInfoCircle, faFileAlt, faCog, faCogs, faEnvelope,faStream,faTimes,faEuroSign,faExternalLinkAlt,faCopyright,faArrowUp,faEllipsisH  } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root'
})
export class IconService {
  menu = faBars;
  menuDot= faEllipsisV;
  menuDotHori = faEllipsisH;
  logOut = faSignOutAlt;
  home = faHome;
  user = faUser;
  info = faInfoCircle;
  flie = faFileAlt;
  setting = faCog;
  cogs = faCogs;
  mail = faEnvelope;
  files = faStream;
  close = faTimes;
  euro = faEuroSign;
  external = faExternalLinkAlt;
  copyRight = faCopyright;
  up = faArrowUp;
  constructor() { }
}
