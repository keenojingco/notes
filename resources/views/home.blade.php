@extends('layouts.app')

@section('content')
    <notes v-if="shared.showList"></notes>
    <create-note v-if="!shared.showList"></create-note>
@endsection
