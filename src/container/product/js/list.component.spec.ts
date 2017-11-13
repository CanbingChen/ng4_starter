import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ProductListComponent } from './list.component';
describe('测试列表组件',()=>{
    let comp:    ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
    beforeEach(()=>{
        TestBed.configureTestingModule({
          declarations: [ ProductListComponent ], // declare the test component
        });
        fixture = TestBed.createComponent(ProductListComponent);
        comp = fixture.componentInstance; // ProductListComponent test instance
        it('初始化时，应该会定义一些变量',()=>{
            expect(comp.goodsList.length).toEqual(0);
        });
    });
});
