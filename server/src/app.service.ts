import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor() {}

  root() {
    return `<p>You cannot pass! Please visit the site <a href="https://tamasnovak.net/ckpd?utm_source=backend">from its front-end</a> and let the back-end work its magic alone and undisturbed.</p>`;
  }
}