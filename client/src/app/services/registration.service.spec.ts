import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from './registration.service';
import { PostResponse } from '../models/post-response';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const samplePostBody = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email@gmail.com',
    username: 'usernametest',
    password: 'fsdf44455'
  }

  const sampleResponse: PostResponse = {
    result: true,
    id: 'testf'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService]
    });
    service = TestBed.inject(RegistrationService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have post body defined', () => {
    expect(samplePostBody).toBeDefined();
  });

  it('should have post body equal to model', () => {
    expect(samplePostBody).toBeTruthy();
  });

});
