import {Component, OnInit} from '@angular/core';
import {Label} from '../label.model';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent {

  labels: Label[];

  selectedLabel: Label;

  constructor() {
    //    this.labels = [
    //      'StateOfTrance',
    //      'GroupTherapy',
    //      'Fanfare',
    //      'CorstensCountdown',
    //      'ArminVanBuuren',
    //      'Above&Beyond',
    //      'ThomasGold',
    //      'Ferry Corsten'];
    this.labels = [
      new Label('StateOfTrance', [
        'https://www.1001tracklists.com/track/2740pn55/safri-duo-played-a-live-nwyr-willem-de-roo-remix/index.html',
        'https://www.beatport.com/release/sunny-days-club-mix/2052374',
        'https://www.1001tracklists.com/track/2upj62w5/alpha-9-higher-place/index.html']),
      new Label('GroupTherapy', [
        'https://www.1001tracklists.com/track/1qd4y1xx/virtual-self-ghost-voices/index.html',
        'https://www.1001tracklists.com/track/19c5b9pp/gabriel-dresden-only-road-cosmic-gate-remix/index.html',
        'https://www.1001tracklists.com/track/16kvgbt5/above-beyond-northern-soul-nwyr-remix/index.html']),
      new Label('Fanfare', [
        'https://www.1001tracklists.com/track/1p163up/coldplay-one-republic-otto-knows-fix-you-vs.-apologize-vs.-million-voices-thomas-gold-bootleg/index.html',
        'https://www.1001tracklists.com/track/2gkcp0wx/marcus-schossow-new_id-ada-first-day-extended-remix/index.html',
        'https://www.1001tracklists.com/track/1hrpklrp/deniz-koyu-thomas-gold-never-alone/index.html'])];
  }

  addLabel(label: HTMLInputElement, link: HTMLInputElement): boolean {
    //    this.articles.push(new Article(title.value, link.value, 0));
    this.labels.push(new Label(label.value, [link.value]));

    label.value = '';
    link.value = '';

    return false;
  }

  setSelectedLabel(label: Label): boolean {
    this.selectedLabel = label;

    return false;
  }

}
