import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchEngineComponent } from './search-engine.component';
import { By } from '@angular/platform-browser';

describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEngineComponent ],
      imports: [ FormsModule ] // Import FormsModule for ngModel binding
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search engine component', () => {
    expect(component).toBeTruthy();
  });

  it('should display no results initially', () => {
    const resultsContainer = fixture.debugElement.query(By.css('.results-container'));
    expect(resultsContainer).toBeNull();
  });

  it('should show results after a search term is entered and search is clicked', () => {
    // Set the search term in the component
    component.searchTerm = 'Result';
    component.search();
    fixture.detectChanges();

    const results = fixture.debugElement.queryAll(By.css('li'));
    expect(results.length).toBe(3);
  });

  it('should display "No results found" if no matches are found', () => {
    component.searchTerm = 'NoMatch';
    component.search();
    fixture.detectChanges();

    const noResultsMessage = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(noResultsMessage.textContent).toContain('No results found');
  });

  it('should call the search method when the search button is clicked', () => {
    spyOn(component, 'search');

    // Find and click the search button
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.search).toHaveBeenCalled();
  });

  it('should update searchTerm when user types in input', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchTerm).toBe('Test');
  });
});
