import {Component, OnInit} from "@angular/core";
import { ObservableArray } from "data/observable-array";

@Component({
    selector: "LVListViewContainer",
    templateUrl: "pages/listview/listview.html",
    styleUrls: ["pages/listview/listview.css"],
})
export class LVListViewContainer implements OnInit {
    constructor() {
    }

    private _dataItems: ObservableArray<DataItem>;

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(DataItem.dummyItems());
        console.log(this._dataItems.length);
    }

    gridRows(arr: any[], type: string): string {
        return arr.map(obj => {
            return type
        }).join(", ");
    }
}

class DataItem {
    constructor(public data: number[][][], public selected?: boolean) {

    }

    static dummyItem(): DataItem {
        let data = [[[25668]],[[61320]], [[5176, 95653]], [[56903, 49122, 55136, 95445], [34471, 40509, 88760]], [[1261]], [[4000, 7517, 9932]], [[8, 21]]]
        return new DataItem(data);
    }

    static dummyItems(): DataItem[] {
        var output = new Array<DataItem>();
        for (var i = 0; i < 10; i++) {
            let ranks = DataItem.generateRanks();
            let ar = DataItem.generateArrangedRanks(ranks);
            output.push(new DataItem(ar));
        }
        return output;
    }

    static generateRanks(maxRank: number = 8): number[][] {
        var output = new Array<Array<number>>(maxRank);
        for (var i = 0; i < maxRank; i++) {
            let numCount = i <= 1 ? 1 : Math.floor(Math.random() * 8) + 1;
            var arr = new Array<number>(numCount);
            for (var j = 0; j < numCount; j++) {
                arr[j] = Math.floor(Math.random() * 99999) + 1;
            }
            output[i] = arr;
        }
        return output;
    }

    static generateArrangedRanks(ranks: number[][]): number[][][] {
        let noip = function numberOfItemsPerRow(r: any[]): number {
            let l = r.length;
            if (l <= 2) {
                return l;
            }
            if (l % 3 == 0) {
                return 3;
            }
            if (l % 4 == 0) {
                return 4;
            }
            return (l % 4 >= l % 3) ? 4 : 3
        }
        return ranks.map( nums => {
            let arr = new Array<Array<number>>()
            let numberOfItemsPerRow = noip(nums);
            var setItemCount = 0;
            arr.push(new Array<number>());
            var currentRow = 0;
            while (setItemCount < nums.length) {
                var i = setItemCount;
                while (i < setItemCount + numberOfItemsPerRow && i < nums.length) {
                    arr[currentRow].push(nums[i]);
                    i++;
                }
                if (i < nums.length) {
                    setItemCount = i;
                    currentRow++;
                    arr.push(new Array<number>());
                }
                else {
                    break;
                }
            }
            return arr;
        })
    }
}