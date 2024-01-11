
import { ILSSchematic } from "@/src/cpu/ImportExport";
export const riscvLoadStoreInternalSchematic: ILSSchematic = {"id":"c-4xavnavm","name":"RISCV Load/Store Internal","parentCompDefId":"core/riscv/loadStore0","parentComp":{"id":"","defId":"core/riscv/loadStore0","x":0,"y":0,"r":0},"innerDisplayBbox":{"minX":-52,"minY":9,"maxX":-11,"maxY":38},"compBbox":{"minX":-57,"minY":-27,"maxX":51,"maxY":43},"model":{"wires":[{"nodes":[{"id":0,"x":-56,"y":-15,"edges":[1],"ref":{"type":3,"id":"0","compNodeId":"a"}},{"id":1,"x":-51,"y":-15,"edges":[0],"ref":{"type":3,"id":"9","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":-29,"y":42,"edges":[1],"ref":{"type":3,"id":"1","compNodeId":"a"}},{"id":1,"x":-29,"y":39,"edges":[0,2]},{"id":2,"x":-53,"y":39,"edges":[1,3]},{"id":3,"x":-53,"y":-13,"edges":[2,4]},{"id":4,"x":-51,"y":-13,"edges":[3],"ref":{"type":3,"id":"9","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":-56,"y":-23,"edges":[1],"ref":{"type":3,"id":"3","compNodeId":"a"}},{"id":1,"x":-38,"y":-23,"edges":[0,2,3]},{"id":2,"x":-38,"y":-19,"edges":[1],"ref":{"type":3,"id":"2","compNodeId":"i"}},{"id":3,"x":-35,"y":-23,"edges":[1,4]},{"id":4,"x":-35,"y":-26,"edges":[3],"ref":{"type":3,"id":"6","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":10,"y":-14,"edges":[1],"ref":{"type":3,"id":"11","compNodeId":"o"}},{"id":1,"x":11,"y":-14,"edges":[0],"ref":{"type":3,"id":"10","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":-37,"y":-16,"edges":[1],"ref":{"type":3,"id":"2","compNodeId":"o_0_0"}},{"id":1,"x":-37,"y":-13,"edges":[0,2]},{"id":2,"x":0,"y":-13,"edges":[1],"ref":{"type":3,"id":"12","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":-9,"y":-27,"edges":[1],"ref":{"type":3,"id":"7","compNodeId":"a"}},{"id":1,"x":-9,"y":-26,"edges":[0],"ref":{"type":3,"id":"15","compNodeId":"o"}}]},{"nodes":[{"id":0,"x":13,"y":19,"edges":[1],"ref":{"type":3,"id":"21","compNodeId":"a"}},{"id":1,"x":13,"y":24,"edges":[0],"ref":{"type":3,"id":"20","compNodeId":"o_0_0"}}]},{"nodes":[{"id":0,"x":13,"y":15,"edges":[1],"ref":{"type":3,"id":"21","compNodeId":"o"}},{"id":1,"x":13,"y":10,"edges":[0],"ref":{"type":3,"id":"19","compNodeId":"i_0_0"}}]},{"nodes":[{"id":0,"x":9,"y":19,"edges":[1],"ref":{"type":3,"id":"22","compNodeId":"o"}},{"id":1,"x":9,"y":10,"edges":[0],"ref":{"type":3,"id":"19","compNodeId":"i_1_0"}}]},{"nodes":[{"id":0,"x":9,"y":23,"edges":[1],"ref":{"type":3,"id":"22","compNodeId":"a"}},{"id":1,"x":9,"y":24,"edges":[0],"ref":{"type":3,"id":"20","compNodeId":"o_1_0"}}]},{"nodes":[{"id":0,"x":36,"y":11,"edges":[1],"ref":{"type":3,"id":"28","compNodeId":"out"}},{"id":1,"x":37,"y":11,"edges":[0,2]},{"id":2,"x":37,"y":14,"edges":[1,3],"ref":{"type":3,"id":"42","compNodeId":"i_1_0"}},{"id":3,"x":34,"y":14,"edges":[2],"ref":{"type":3,"id":"42","compNodeId":"i_1_0"}}]},{"nodes":[{"id":0,"x":31,"y":10,"edges":[1],"ref":{"type":3,"id":"27","compNodeId":"b"}},{"id":1,"x":31,"y":12,"edges":[0,2]},{"id":2,"x":34,"y":12,"edges":[1],"ref":{"type":3,"id":"28","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":44,"y":11,"edges":[1,2]},{"id":1,"x":44,"y":13,"edges":[0,3]},{"id":2,"x":43,"y":11,"edges":[0],"ref":{"type":3,"id":"30","compNodeId":"out"}},{"id":3,"x":38,"y":13,"edges":[1,4]},{"id":4,"x":38,"y":14,"edges":[3],"ref":{"type":3,"id":"42","compNodeId":"i_0_0"}}]},{"nodes":[{"id":0,"x":38,"y":10,"edges":[1],"ref":{"type":3,"id":"31","compNodeId":"b"}},{"id":1,"x":38,"y":12,"edges":[0,2]},{"id":2,"x":41,"y":12,"edges":[1],"ref":{"type":3,"id":"30","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":12,"y":39,"edges":[1,2]},{"id":1,"x":16,"y":39,"edges":[0,3]},{"id":2,"x":12,"y":27,"edges":[0],"ref":{"type":3,"id":"20","compNodeId":"i"}},{"id":3,"x":16,"y":42,"edges":[1],"ref":{"type":3,"id":"4","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":-10,"y":16,"edges":[1,2]},{"id":1,"x":-10,"y":0,"edges":[0],"ref":{"type":3,"id":"23","compNodeId":"o"}},{"id":2,"x":1,"y":16,"edges":[0],"ref":{"type":3,"id":"49","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":-40,"y":-5,"edges":[1,2]},{"id":1,"x":-40,"y":-16,"edges":[0],"ref":{"type":3,"id":"2","compNodeId":"o_3_0"}},{"id":2,"x":1,"y":-5,"edges":[0,3,4]},{"id":3,"x":1,"y":1,"edges":[2,5]},{"id":4,"x":6,"y":-5,"edges":[2]},{"id":5,"x":24,"y":1,"edges":[3],"ref":{"type":3,"id":"44","compNodeId":"i"}}]},{"nodes":[{"id":0,"x":50,"y":8,"edges":[1],"ref":{"type":3,"id":"5","compNodeId":"a"}},{"id":1,"x":48,"y":8,"edges":[0,2]},{"id":2,"x":48,"y":19,"edges":[1,3]},{"id":3,"x":37,"y":19,"edges":[2,4]},{"id":4,"x":37,"y":17,"edges":[3],"ref":{"type":3,"id":"42","compNodeId":"o"}}]},{"nodes":[{"id":0,"x":6,"y":-14,"edges":[1,2,5]},{"id":1,"x":6,"y":-17,"edges":[0,3]},{"id":2,"x":7,"y":-14,"edges":[0],"ref":{"type":3,"id":"11","compNodeId":"i"}},{"id":3,"x":21,"y":-17,"edges":[1,4]},{"id":4,"x":21,"y":-14,"edges":[3,6]},{"id":5,"x":4,"y":-14,"edges":[0],"ref":{"type":3,"id":"12","compNodeId":"o"}},{"id":6,"x":20,"y":-14,"edges":[4],"ref":{"type":3,"id":"13","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":-9,"y":-20,"edges":[1,2]},{"id":1,"x":-45,"y":-20,"edges":[0,3]},{"id":2,"x":-9,"y":-22,"edges":[0],"ref":{"type":3,"id":"15","compNodeId":"a"}},{"id":3,"x":-45,"y":-13,"edges":[1,4]},{"id":4,"x":-47,"y":-13,"edges":[3],"ref":{"type":3,"id":"9","compNodeId":"out"}}]},{"nodes":[{"id":0,"x":-39,"y":-11,"edges":[1,2,3]},{"id":1,"x":-39,"y":-16,"edges":[0],"ref":{"type":3,"id":"2","compNodeId":"o_1_0"}},{"id":2,"x":-34,"y":-11,"edges":[0],"ref":{"type":3,"id":"16","compNodeId":"i"}},{"id":3,"x":-39,"y":-9,"edges":[0,4,5]},{"id":4,"x":-34,"y":-9,"edges":[3],"ref":{"type":3,"id":"17","compNodeId":"i"}},{"id":5,"x":-39,"y":-7,"edges":[3,6]},{"id":6,"x":-34,"y":-7,"edges":[5],"ref":{"type":3,"id":"18","compNodeId":"i"}}]},{"nodes":[{"id":0,"x":23,"y":-10,"edges":[1],"ref":{"type":3,"id":"40","compNodeId":"i"}},{"id":1,"x":23,"y":-11,"edges":[0,2,3]},{"id":2,"x":18,"y":-11,"edges":[1,4]},{"id":3,"x":38,"y":-11,"edges":[1,5]},{"id":4,"x":18,"y":-12,"edges":[2],"ref":{"type":3,"id":"13","compNodeId":"o"}},{"id":5,"x":38,"y":-10,"edges":[3],"ref":{"type":3,"id":"39","compNodeId":"i"}}]},{"nodes":[{"id":0,"x":23,"y":-7,"edges":[1],"ref":{"type":3,"id":"40","compNodeId":"o_0_0"}},{"id":1,"x":23,"y":-4,"edges":[0,2]},{"id":2,"x":24,"y":-4,"edges":[1],"ref":{"type":3,"id":"41","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":22,"y":-7,"edges":[1],"ref":{"type":3,"id":"40","compNodeId":"o_1_0"}},{"id":1,"x":22,"y":-2,"edges":[0,2]},{"id":2,"x":24,"y":-2,"edges":[1],"ref":{"type":3,"id":"41","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":41,"y":-7,"edges":[1],"ref":{"type":3,"id":"39","compNodeId":"o_2_0"}},{"id":1,"x":41,"y":-6,"edges":[0,2]},{"id":2,"x":45,"y":-6,"edges":[1,3]},{"id":3,"x":45,"y":14,"edges":[2,4]},{"id":4,"x":41,"y":14,"edges":[3],"ref":{"type":3,"id":"42","compNodeId":"i_2_0"}}]},{"nodes":[{"id":0,"x":34,"y":-7,"edges":[1],"ref":{"type":3,"id":"39","compNodeId":"o_1_0"}},{"id":1,"x":34,"y":-6,"edges":[0,2]},{"id":2,"x":33,"y":-6,"edges":[1,3]},{"id":3,"x":33,"y":10,"edges":[2,4]},{"id":4,"x":34,"y":10,"edges":[3],"ref":{"type":3,"id":"28","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":38,"y":-7,"edges":[1],"ref":{"type":3,"id":"39","compNodeId":"o_0_0"}},{"id":1,"x":38,"y":-6,"edges":[0,2]},{"id":2,"x":40,"y":-6,"edges":[1,3]},{"id":3,"x":40,"y":10,"edges":[2,4]},{"id":4,"x":41,"y":10,"edges":[3],"ref":{"type":3,"id":"30","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":26,"y":-3,"edges":[1],"ref":{"type":3,"id":"41","compNodeId":"out"}},{"id":1,"x":27,"y":-3,"edges":[0,2]},{"id":2,"x":27,"y":-1,"edges":[1,3]},{"id":3,"x":28,"y":-1,"edges":[2],"ref":{"type":3,"id":"43","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":28,"y":1,"edges":[1],"ref":{"type":3,"id":"43","compNodeId":"b"}},{"id":1,"x":27,"y":1,"edges":[0],"ref":{"type":3,"id":"44","compNodeId":"o"}}]},{"nodes":[{"id":0,"x":32,"y":0,"edges":[1],"ref":{"type":3,"id":"43","compNodeId":"o"}},{"id":1,"x":35,"y":0,"edges":[0,2]},{"id":2,"x":35,"y":2,"edges":[1,3,4]},{"id":3,"x":38,"y":2,"edges":[2,5]},{"id":4,"x":31,"y":2,"edges":[2,6]},{"id":5,"x":38,"y":8,"edges":[3],"ref":{"type":3,"id":"31","compNodeId":"a"}},{"id":6,"x":31,"y":8,"edges":[4],"ref":{"type":3,"id":"27","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":16,"y":-22,"edges":[1],"ref":{"type":3,"id":"14","compNodeId":"a"}},{"id":1,"x":16,"y":-20,"edges":[0,2,3]},{"id":2,"x":13,"y":-20,"edges":[1,4]},{"id":3,"x":18,"y":-20,"edges":[1,5]},{"id":4,"x":13,"y":-16,"edges":[2],"ref":{"type":3,"id":"10","compNodeId":"o"}},{"id":5,"x":18,"y":-16,"edges":[3],"ref":{"type":3,"id":"13","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":-11,"y":-7,"edges":[1,2,3]},{"id":1,"x":-11,"y":-4,"edges":[0],"ref":{"type":3,"id":"23","compNodeId":"b"}},{"id":2,"x":-24,"y":-7,"edges":[0],"ref":{"type":3,"id":"18","compNodeId":"o"}},{"id":3,"x":-7,"y":-7,"edges":[0,4,5]},{"id":4,"x":-7,"y":20,"edges":[3,6]},{"id":5,"x":6,"y":-7,"edges":[3]},{"id":6,"x":1,"y":20,"edges":[4],"ref":{"type":3,"id":"50","compNodeId":"a"}}]},{"nodes":[{"id":0,"x":-5,"y":-9,"edges":[1,2,3]},{"id":1,"x":-5,"y":-4,"edges":[0],"ref":{"type":3,"id":"33","compNodeId":"b"}},{"id":2,"x":4,"y":-9,"edges":[0,4,5]},{"id":3,"x":-9,"y":-9,"edges":[0,6,7]},{"id":4,"x":4,"y":-1,"edges":[2,8]},{"id":5,"x":6,"y":-9,"edges":[2]},{"id":6,"x":-24,"y":-9,"edges":[3],"ref":{"type":3,"id":"17","compNodeId":"o"}},{"id":7,"x":-9,"y":-4,"edges":[3],"ref":{"type":3,"id":"23","compNodeId":"a"}},{"id":8,"x":20,"y":-1,"edges":[4,9]},{"id":9,"x":20,"y":-6,"edges":[8,10]},{"id":10,"x":25,"y":-6,"edges":[9,11]},{"id":11,"x":25,"y":-5,"edges":[10],"ref":{"type":3,"id":"41","compNodeId":"sel"}}]},{"nodes":[{"id":0,"x":-3,"y":-11,"edges":[1,2,3]},{"id":1,"x":-3,"y":-4,"edges":[0],"ref":{"type":3,"id":"33","compNodeId":"a"}},{"id":2,"x":-24,"y":-11,"edges":[0],"ref":{"type":3,"id":"16","compNodeId":"o"}},{"id":3,"x":-1,"y":-11,"edges":[0,4,5]},{"id":4,"x":-1,"y":4,"edges":[3,6]},{"id":5,"x":6,"y":-11,"edges":[3]},{"id":6,"x":42,"y":4,"edges":[4,7]},{"id":7,"x":42,"y":9,"edges":[6],"ref":{"type":3,"id":"30","compNodeId":"sel"}}]},{"nodes":[{"id":0,"x":16,"y":10,"edges":[1],"ref":{"type":3,"id":"19","compNodeId":"i_2_0"}},{"id":1,"x":16,"y":11,"edges":[0],"ref":{"type":3,"id":"47","compNodeId":"o"}}]},{"nodes":[{"id":0,"x":16,"y":15,"edges":[1],"ref":{"type":3,"id":"47","compNodeId":"a"}},{"id":1,"x":16,"y":24,"edges":[0],"ref":{"type":3,"id":"20","compNodeId":"o_2_0"}}]},{"nodes":[{"id":0,"x":5,"y":21,"edges":[1],"ref":{"type":3,"id":"50","compNodeId":"o"}},{"id":1,"x":7,"y":21,"edges":[0],"ref":{"type":3,"id":"22","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":14,"y":13,"edges":[1],"ref":{"type":3,"id":"47","compNodeId":"b"}},{"id":1,"x":-1,"y":13,"edges":[0,2,3],"ref":{"type":3,"id":"48","compNodeId":"o"}},{"id":2,"x":-1,"y":7,"edges":[1,4]},{"id":3,"x":-1,"y":18,"edges":[1,5,6]},{"id":4,"x":-13,"y":7,"edges":[2,7]},{"id":5,"x":1,"y":18,"edges":[3],"ref":{"type":3,"id":"49","compNodeId":"b"}},{"id":6,"x":-1,"y":22,"edges":[3,8]},{"id":7,"x":-13,"y":-15,"edges":[4,9,10]},{"id":8,"x":1,"y":22,"edges":[6],"ref":{"type":3,"id":"50","compNodeId":"b"}},{"id":9,"x":-26,"y":-15,"edges":[7,11,13]},{"id":10,"x":1,"y":-15,"edges":[7],"ref":{"type":3,"id":"12","compNodeId":"a"}},{"id":11,"x":-36,"y":-15,"edges":[9,12]},{"id":12,"x":-36,"y":-16,"edges":[11],"ref":{"type":3,"id":"2","compNodeId":"o_2_0"}},{"id":13,"x":-26,"y":-24,"edges":[9,14]},{"id":14,"x":-11,"y":-24,"edges":[13],"ref":{"type":3,"id":"15","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":5,"y":17,"edges":[1],"ref":{"type":3,"id":"49","compNodeId":"o"}},{"id":1,"x":11,"y":17,"edges":[0],"ref":{"type":3,"id":"21","compNodeId":"b"}}]},{"nodes":[{"id":0,"x":13,"y":-12,"edges":[1],"ref":{"type":3,"id":"10","compNodeId":"a"}},{"id":1,"x":13,"y":7,"edges":[0],"ref":{"type":3,"id":"19","compNodeId":"o"}}]},{"nodes":[{"id":0,"x":-4,"y":0,"edges":[1],"ref":{"type":3,"id":"33","compNodeId":"o"}},{"id":1,"x":-4,"y":5,"edges":[0,2]},{"id":2,"x":35,"y":5,"edges":[1,3]},{"id":3,"x":35,"y":9,"edges":[2],"ref":{"type":3,"id":"28","compNodeId":"sel"}}]}],"comps":[{"id":"0","defId":"core/comp/port","x":-62,"y":-18,"r":0,"args":{"portId":"addrOffset","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0}},{"id":"1","defId":"core/comp/port","x":-32,"y":48,"r":3,"args":{"portId":"addrBase","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}},{"id":"2","defId":"core/bits/expand-multi","x":-35,"y":-19,"r":1,"args":{"bitWidth":5,"bitRange":[{"start":4,"end":4,"individual":false,"showBits":true,"id":3},{"start":2,"end":3,"individual":false,"showBits":true,"id":1},{"start":1,"end":1,"individual":true,"showBits":true,"id":0},{"start":0,"end":0,"showBits":true,"individual":true,"id":2}],"collapse":false,"reverse":true,"rotate":0}},{"id":"3","defId":"core/comp/port","x":-62,"y":-26,"r":0,"args":{"portId":"ctrl","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":5,"signed":false,"tristateOrder":0,"flags":3,"valueMode":2,"inputOverride":false,"inputValueOverride":3}},{"id":"4","defId":"core/comp/port","x":11,"y":46,"r":3,"args":{"portId":"dataIn","name":"","w":4,"h":11,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":0,"inputOverride":false,"inputValueOverride":1067786740,"extId":""}},{"id":"5","defId":"core/comp/port","x":60,"y":10,"r":2,"args":{"portId":"dataOut","name":"","w":10,"h":4,"type":2,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":0,"inputOverride":false,"inputValueOverride":3,"extId":""}},{"id":"6","defId":"core/comp/port","x":-32,"y":-32,"r":1,"args":{"portId":"busCtrl","name":"","w":6,"h":6,"type":2,"portPos":0,"rotate":0,"bitWidth":5,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}},{"id":"7","defId":"core/comp/port","x":-6,"y":-33,"r":1,"args":{"portId":"busAddr","name":"","w":6,"h":6,"type":2,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}},{"id":"9","defId":"core/math/adder","x":-51,"y":-17,"r":0,"subSchematicId":"c-63zedesz"},{"id":"10","defId":"core/gate/transmission","x":11,"y":-12,"r":3,"args":{"rotate":0,"bitWidth":32}},{"id":"11","defId":"core/gate/not","x":7,"y":-15,"r":0,"args":{"rotate":0,"bitWidth":1}},{"id":"12","defId":"core/gate/and","x":0,"y":-16,"r":0,"args":{"rotate":0,"bitWidth":1}},{"id":"13","defId":"core/gate/and-bcast","x":20,"y":-16,"r":1,"args":{"rotate":0,"bitWidth":32}},{"id":"14","defId":"core/comp/port","x":20,"y":-27,"r":1,"args":{"portId":"busData","name":"","w":5,"h":9,"type":7,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":2,"flags":2,"valueMode":0,"inputOverride":false,"inputValueOverride":1228586125,"extId":""}},{"id":"15","defId":"core/gate/and-bcast","x":-11,"y":-22,"r":3,"args":{"rotate":0,"bitWidth":32}},{"id":"16","defId":"core/bits/comparitor","x":-34,"y":-12,"r":0,"args":{"bitWidth":2,"match":"00","name":"BYTE"}},{"id":"17","defId":"core/bits/comparitor","x":-34,"y":-10,"r":0,"args":{"bitWidth":2,"match":"01","name":"HALF"}},{"id":"18","defId":"core/bits/comparitor","x":-34,"y":-8,"r":0,"args":{"bitWidth":2,"match":"10","name":"WORD"}},{"id":"19","defId":"core/bits/expand-multi","x":18,"y":7,"r":1,"args":{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":true,"reverse":true,"rotate":0}},{"id":"20","defId":"core/bits/expand-multi","x":7,"y":27,"r":3,"args":{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":false,"reverse":false,"rotate":0}},{"id":"21","defId":"core/gate/and-bcast","x":11,"y":19,"r":3,"args":{"rotate":0,"bitWidth":8}},{"id":"22","defId":"core/gate/and-bcast","x":7,"y":23,"r":3,"args":{"rotate":0,"bitWidth":16}},{"id":"23","defId":"core/gate/or","x":-8,"y":-4,"r":1,"args":{"rotate":0,"bitWidth":1}},{"id":"27","defId":"core/bits/expand","x":32,"y":8,"r":1,"args":{"rotate":0,"bitWidth":16}},{"id":"28","defId":"core/flow/mux2","x":34,"y":9,"r":0,"args":{"reverse":false,"bitWidth":16},"subSchematicId":"c-6f4cdt0t"},{"id":"30","defId":"core/flow/mux2","x":41,"y":9,"r":0,"args":{"reverse":false,"bitWidth":8},"subSchematicId":"c-6f4cdt0t"},{"id":"31","defId":"core/bits/expand","x":39,"y":8,"r":1,"args":{"rotate":0,"bitWidth":8}},{"id":"33","defId":"core/gate/or","x":-2,"y":-4,"r":1,"args":{"rotate":0,"bitWidth":1}},{"id":"39","defId":"core/bits/expand-multi","x":43,"y":-10,"r":1,"args":{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":false,"reverse":true,"rotate":0}},{"id":"40","defId":"core/bits/expand-multi","x":24,"y":-10,"r":1,"args":{"bitWidth":32,"bitRange":[{"start":15,"end":15,"individual":false,"showBits":false,"id":1},{"start":7,"end":7,"individual":false,"showBits":false,"id":0}],"collapse":false,"reverse":true,"rotate":0}},{"id":"41","defId":"core/flow/mux2","x":24,"y":-5,"r":0,"args":{"reverse":false,"bitWidth":15},"subSchematicId":"c-6f4cdt0t"},{"id":"42","defId":"core/bits/expand-multi","x":32,"y":17,"r":3,"args":{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":true,"reverse":false,"rotate":0}},{"id":"43","defId":"core/gate/and","x":28,"y":-2,"r":0,"args":{"rotate":0,"bitWidth":1}},{"id":"44","defId":"core/gate/not","x":24,"y":0,"r":0,"args":{"rotate":0,"bitWidth":1}},{"id":"47","defId":"core/gate/and-bcast","x":14,"y":15,"r":3,"args":{"rotate":0,"bitWidth":8}},{"id":"49","defId":"core/gate/and","x":1,"y":15,"r":0,"args":{"rotate":0,"bitWidth":1}},{"id":"50","defId":"core/gate/and","x":1,"y":19,"r":0,"args":{"rotate":0,"bitWidth":1}}]}};

export const riscvLoadStoreInternalSchematicStr = `#wire-schema 1
C 0 core/comp/port p:-62,-18,0 c:{"portId":"addrOffset","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0}
C 1 core/comp/port p:-32,48,3 c:{"portId":"addrBase","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}
C 2 core/bits/expand-multi p:-35,-19,1 c:{"bitWidth":5,"bitRange":[{"start":4,"end":4,"individual":false,"showBits":true,"id":3},{"start":2,"end":3,"individual":false,"showBits":true,"id":1},{"start":1,"end":1,"individual":true,"showBits":true,"id":0},{"start":0,"end":0,"showBits":true,"individual":true,"id":2}],"collapse":false,"reverse":true,"rotate":0}
C 3 core/comp/port p:-62,-26,0 c:{"portId":"ctrl","name":"","w":6,"h":6,"type":1,"portPos":0,"rotate":0,"bitWidth":5,"signed":false,"tristateOrder":0,"flags":3,"valueMode":2,"inputOverride":false,"inputValueOverride":3}
C 4 core/comp/port p:11,46,3 c:{"portId":"dataIn","name":"","w":4,"h":11,"type":1,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":0,"inputOverride":false,"inputValueOverride":1067786740,"extId":""}
C 5 core/comp/port p:60,10,2 c:{"portId":"dataOut","name":"","w":10,"h":4,"type":2,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":0,"inputOverride":false,"inputValueOverride":3,"extId":""}
C 6 core/comp/port p:-32,-32,1 c:{"portId":"busCtrl","name":"","w":6,"h":6,"type":2,"portPos":0,"rotate":0,"bitWidth":5,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}
C 7 core/comp/port p:-6,-33,1 c:{"portId":"busAddr","name":"","w":6,"h":6,"type":2,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":0,"flags":3,"valueMode":1,"inputOverride":false,"inputValueOverride":0,"extId":""}
C 9 core/math/adder p:-51,-17,0 c:{}
C 10 core/gate/transmission p:11,-12,3 c:{"rotate":0,"bitWidth":32}
C 11 core/gate/not p:7,-15,0 c:{"rotate":0,"bitWidth":1}
C 12 core/gate/and p:0,-16,0 c:{"rotate":0,"bitWidth":1}
C 13 core/gate/and-bcast p:20,-16,1 c:{"rotate":0,"bitWidth":32}
C 14 core/comp/port p:20,-27,1 c:{"portId":"busData","name":"","w":5,"h":9,"type":7,"portPos":0,"rotate":0,"bitWidth":32,"signed":false,"tristateOrder":2,"flags":2,"valueMode":0,"inputOverride":false,"inputValueOverride":1228586125,"extId":""}
C 15 core/gate/and-bcast p:-11,-22,3 c:{"rotate":0,"bitWidth":32}
C 16 core/bits/comparitor p:-34,-12,0 c:{"bitWidth":2,"match":"00","name":"BYTE"}
C 17 core/bits/comparitor p:-34,-10,0 c:{"bitWidth":2,"match":"01","name":"HALF"}
C 18 core/bits/comparitor p:-34,-8,0 c:{"bitWidth":2,"match":"10","name":"WORD"}
C 19 core/bits/expand-multi p:18,7,1 c:{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":true,"reverse":true,"rotate":0}
C 20 core/bits/expand-multi p:7,27,3 c:{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":false,"reverse":false,"rotate":0}
C 21 core/gate/and-bcast p:11,19,3 c:{"rotate":0,"bitWidth":8}
C 22 core/gate/and-bcast p:7,23,3 c:{"rotate":0,"bitWidth":16}
C 23 core/gate/or p:-8,-4,1 c:{"rotate":0,"bitWidth":1}
C 27 core/bits/expand p:32,8,1 c:{"rotate":0,"bitWidth":16}
C 28 core/flow/mux2 p:34,9,0 c:{"reverse":false,"bitWidth":16}
C 30 core/flow/mux2 p:41,9,0 c:{"reverse":false,"bitWidth":8}
C 31 core/bits/expand p:39,8,1 c:{"rotate":0,"bitWidth":8}
C 33 core/gate/or p:-2,-4,1 c:{"rotate":0,"bitWidth":1}
C 39 core/bits/expand-multi p:43,-10,1 c:{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":false,"reverse":true,"rotate":0}
C 40 core/bits/expand-multi p:24,-10,1 c:{"bitWidth":32,"bitRange":[{"start":15,"end":15,"individual":false,"showBits":false,"id":1},{"start":7,"end":7,"individual":false,"showBits":false,"id":0}],"collapse":false,"reverse":true,"rotate":0}
C 41 core/flow/mux2 p:24,-5,0 c:{"reverse":false,"bitWidth":15}
C 42 core/bits/expand-multi p:32,17,3 c:{"bitWidth":32,"bitRange":[{"start":16,"end":31,"individual":false,"showBits":false,"id":1},{"start":8,"end":15,"individual":false,"showBits":false,"id":0},{"start":0,"end":7,"showBits":false,"individual":false,"id":2}],"collapse":true,"reverse":false,"rotate":0}
C 43 core/gate/and p:28,-2,0 c:{"rotate":0,"bitWidth":1}
C 44 core/gate/not p:24,0,0 c:{"rotate":0,"bitWidth":1}
C 47 core/gate/and-bcast p:14,15,3 c:{"rotate":0,"bitWidth":8}
C 49 core/gate/and p:1,15,0 c:{"rotate":0,"bitWidth":1}
C 50 core/gate/and p:1,19,0 c:{"rotate":0,"bitWidth":1}
W 0 ns:[-56,-15 p:0/a|-51,-15,0 p:9/a]
W 1 ns:[-29,42 p:1/a|-29,39,0|-53,39,1|-53,-13,2|-51,-13,3 p:9/b]
W 2 ns:[-56,-23 p:3/a|-38,-23,0|-38,-19,1 p:2/i|-35,-23,1|-35,-26,3 p:6/a]
W 3 ns:[10,-14 p:11/o|11,-14,0 p:10/b]
W 4 ns:[-37,-16 p:2/o_0_0|-37,-13,0|0,-13,1 p:12/b]
W 5 ns:[-9,-27 p:7/a|-9,-26,0 p:15/o]
W 6 ns:[13,19 p:21/a|13,24,0 p:20/o_0_0]
W 7 ns:[13,15 p:21/o|13,10,0 p:19/i_0_0]
W 8 ns:[9,19 p:22/o|9,10,0 p:19/i_1_0]
W 9 ns:[9,23 p:22/a|9,24,0 p:20/o_1_0]
W 10 ns:[36,11 p:28/out|37,11,0|37,14,1 p:42/i_1_0|34,14,2 p:42/i_1_0]
W 11 ns:[31,10 p:27/b|31,12,0|34,12,1 p:28/b]
W 12 ns:[44,11|44,13,0|43,11,0 p:30/out|38,13,1|38,14,3 p:42/i_0_0]
W 13 ns:[38,10 p:31/b|38,12,0|41,12,1 p:30/b]
W 14 ns:[12,39|16,39,0|12,27,0 p:20/i|16,42,1 p:4/a]
W 15 ns:[-10,16|-10,0,0 p:23/o|1,16,0 p:49/a]
W 16 ns:[-40,-5|-40,-16,0 p:2/o_3_0|1,-5,0|1,1,2|6,-5,2|24,1,3 p:44/i]
W 17 ns:[]
W 18 ns:[50,8 p:5/a|48,8,0|48,19,1|37,19,2|37,17,3 p:42/o]
W 20 ns:[6,-14|6,-17,0|7,-14,0 p:11/i|21,-17,1|21,-14,3|4,-14,0 p:12/o|20,-14,4 p:13/b]
W 21 ns:[-9,-20|-45,-20,0|-9,-22,0 p:15/a|-45,-13,1|-47,-13,3 p:9/out]
W 22 ns:[-39,-11|-39,-16,0 p:2/o_1_0|-34,-11,0 p:16/i|-39,-9,0|-34,-9,3 p:17/i|-39,-7,3|-34,-7,5 p:18/i]
W 23 ns:[23,-10 p:40/i|23,-11,0|18,-11,1|38,-11,1|18,-12,2 p:13/o|38,-10,3 p:39/i]
W 24 ns:[23,-7 p:40/o_0_0|23,-4,0|24,-4,1 p:41/a]
W 25 ns:[22,-7 p:40/o_1_0|22,-2,0|24,-2,1 p:41/b]
W 26 ns:[41,-7 p:39/o_2_0|41,-6,0|45,-6,1|45,14,2|41,14,3 p:42/i_2_0]
W 27 ns:[34,-7 p:39/o_1_0|34,-6,0|33,-6,1|33,10,2|34,10,3 p:28/a]
W 28 ns:[38,-7 p:39/o_0_0|38,-6,0|40,-6,1|40,10,2|41,10,3 p:30/a]
W 29 ns:[26,-3 p:41/out|27,-3,0|27,-1,1|28,-1,2 p:43/a]
W 30 ns:[28,1 p:43/b|27,1,0 p:44/o]
W 31 ns:[32,0 p:43/o|35,0,0|35,2,1|38,2,2|31,2,2|38,8,3 p:31/a|31,8,4 p:27/a]
W 32 ns:[16,-22 p:14/a|16,-20,0|13,-20,1|18,-20,1|13,-16,2 p:10/o|18,-16,3 p:13/a]
W 33 ns:[-11,-7|-11,-4,0 p:23/b|-24,-7,0 p:18/o|-7,-7,0|-7,20,3|6,-7,3|1,20,4 p:50/a]
W 34 ns:[-5,-9|-5,-4,0 p:33/b|4,-9,0|-9,-9,0|4,-1,2|6,-9,2|-24,-9,3 p:17/o|-9,-4,3 p:23/a|20,-1,4|20,-6,8|25,-6,9|25,-5,10 p:41/sel]
W 35 ns:[-3,-11|-3,-4,0 p:33/a|-24,-11,0 p:16/o|-1,-11,0|-1,4,3|6,-11,3|42,4,4|42,9,6 p:30/sel]
W 36 ns:[16,10 p:19/i_2_0|16,11,0 p:47/o]
W 37 ns:[16,15 p:47/a|16,24,0 p:20/o_2_0]
W 38 ns:[5,21 p:50/o|7,21,0 p:22/b]
W 39 ns:[14,13 p:47/b|-1,13,0 p:48/o|-1,7,1|-1,18,1|-13,7,2|1,18,3 p:49/b|-1,22,3|-13,-15,4|1,22,6 p:50/b|-26,-15,7|1,-15,7 p:12/a|-36,-15,9|-36,-16,11 p:2/o_2_0|-26,-24,9|-11,-24,13 p:15/b]
W 40 ns:[5,17 p:49/o|11,17,0 p:21/b]
W 41 ns:[13,-12 p:10/a|13,7,0 p:19/o]
W 43 ns:[-4,0 p:33/o|-4,5,0|35,5,1|35,9,2 p:28/sel]
`;