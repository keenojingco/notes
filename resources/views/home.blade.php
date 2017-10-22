@extends('layouts.app')

@section('content')
    <notes v-if="!Object.keys(note).length" @shownote="showNote"></notes>
    <note v-if="Object.keys(note).length" :note="note" @shownotes="showNotes"></note>
@endsection
